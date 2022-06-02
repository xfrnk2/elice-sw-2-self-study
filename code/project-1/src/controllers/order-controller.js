import { orderService } from '../services';
import is from '@sindresorhus/is';

const getOrderlist = async (req, res, next) => {
  try {
    // 전체 사용자 목록을 얻음
    const orders = await orderService.getOrders();

    // 사용자 목록(배열)을 JSON 형태로 프론트에 보냄
    res.status(200).json({
      isSuccess: true,
      message: 'Orders loaded successfully',
      status: 200,
      result: orders,
    });
  } catch (error) {
    next(error);
  }
};

// 주문 하기
const Order = async (req, res, next) => {
  try {
    // Content-Type: application/json 설정을 안 한 경우, 에러를 만들도록 함.
    // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요',
      );
    }

    const userId = req.currentUserId;

    // 위 데이터를 유저 db에 추가하기
    const newOrder = await orderService.addOrder({
      userId,
      ...req.body,
    });

    // 추가된 유저의 db 데이터를 프론트에 다시 보내줌
    // 물론 프론트에서 안 쓸 수도 있지만, 편의상 일단 보내 줌
    res.status(200).json({
      isSuccess: true,
      message: 'Order inserted successfully',
      status: 200,
      result: newOrder,
    });
  } catch (error) {
    next(error);
  }
};

// 사용자 주문 조회
const getOrder = async (req, res, next) => {
  try {
    const userId = req.currentUserId;

    // 사용자 주문 목록
    const orders = await orderService.getOrdersById(userId);

    // 사용자 목록(배열)을 JSON 형태로 프론트에 보냄
    res.status(200).json({
      isSuccess: true,
      message: 'Orders loaded successfully',
      status: 200,
      result: orders,
    });
  } catch (error) {
    next(error);
  }
};

const getOrderByAdmin = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const orders = await orderService.getOrdersById(userId);

    // 사용자 목록(배열)을 JSON 형태로 프론트에 보냄
    res.status(200).json({
      isSuccess: true,
      message: 'Orders loaded successfully',
      status: 200,
      result: orders,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    const userId = req.currentUserId;

    // body로부터 id를 가져옴
    const orderId = req.body.orderId;

    // 주문 정보 삭제
    const data = await orderService.deleteOrder(userId, orderId);

    // 성공 여부 프론트에 보냄
    res.status(200).json({
      isSuccess: true,
      message: 'Order canceled successfully',
      status: 200,
      result: data,
    });
  } catch (error) {
    next(error);
  }
};

const deleteOrderByAdmin = async (req, res, next) => {
  try {
    const orderId = req.body.orderId;
    const userId = await orderService.findIdByorderId(orderId);

    // 주문 정보 삭제
    const data = await orderService.deleteOrder(userId, orderId);

    // 성공 여부 프론트에 보냄
    res.status(200).json({
      isSuccess: true,
      message: 'Order canceled successfully',
      status: 200,
      result: data,
    });
  } catch (error) {
    next(error);
  }
};

export {
  getOrderlist,
  Order,
  getOrder,
  getOrderByAdmin,
  deleteOrder,
  deleteOrderByAdmin,
};
