### 템플릿 엔진이란?

- 서버에서 클라이언트로 보낼 HTML의 형태를 미리 템플릿으로 저장
- 동작시에 미리 작성된 템플릿에 데이터를 넣어서 완성된 HTML 생성
- 템플릿 엔진은 템플릿 작성 문법과 작성된 템플릿을 HTML로 변환하는 기능을 제공

### RESTAPI란?

HTTP 프로토콜의 URI 주소를 이용해서 서버의 기능을 처리하는 애플리케이션 인터페이스입니다.

### express에서 로컬변수(함수)를 전역변수(함수)로

express에서 로컬 변수를 전역 변수로 바꾸는 방법은 `res.locals.변수이름 = 값`
으로 간단하게 나타낼 수 있다.

```jsx
app.locals.formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
}
```

### AsyncHandler 만들어보기 - 오류 처리를 위한 패턴 처리

```jsx
// /utils/async-handler.js
module.exports = (requestHandler) => {
  return async (req, res, next) => {
    try {
        await requestHandler(req, res);
    } catch (err) {
        next(err);
    }
  }
}
```

```jsx
// app.js
const { Router } = require('express');
const { Post } = require('../models');
const asyncHandler = require('../utils/async-handler');

const router = Router();

router.get('/', asyncHandler(async (req, res) => {
  if (req.query.write) {
    res.render('post/edit');
    return;
  }
  
  const posts = await Post.find({});
  
  res.render('post/list', { posts });
}));

router.get('/:shortId', async (req, res) => {
  const { shortId } = req.params;
  const post = await Post.findOne({ shortId });
  
  if (req.query.edit) {
    res.render('post/edit', { post });
    return;
  }
  
  res.render('post/view', { post });
});

router.post('/', asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  

if (!title || !content) {
  throw new Error('제목과 내용을 입력해 주세요');
}

const post = await Post.create({ title, content });
res.redirect(`/posts/${post.shortId}`);

}));

router.post('/:shortId', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  const { title, content } = req.body;

    if (!title || !content) {
      throw new Error('제목과 내용을 입력해 주세요');
    }
    
    await Post.updateOne({ shortId }, { title, content });
    res.redirect(`/posts/${shortId}`);
}));

router.delete('/:shortId', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  await Post.deleteOne({ shortId });
  res.send('OK');
}));

module.exports = router;
```

### 고유한 nanoid를 가지게 하기

```jsx
const { nanoid } = require('nanoid');

const shortId = {
  type: String,
  default: () => {
    return nanoid()
  },
  require: true,
  index: true,
}

module.exports = shortId;
```

### CRUD 전반에 대한 코드

- 유의해서 볼 부분 : update와 create에서 전달 인자는 어떻게 이루어지는지?
    - update의 경우, 대상의 shortId를 첫번째 인자로 넘기고, 그 다음 수정할 내용을 넘기고 있다.
    
    ```jsx
    const { Router } = require('express');
    const { Post } = require('../models');
    
    const router = Router();
    
    router.get('/', async (req, res, next) => {
      if (req.query.write) {
        res.render('post/edit');
        return;
      }
      
      const posts = await Post.find({}); // 게시글 목록
      
      res.render('post/list', { posts });
    });
    
    router.get('/:shortId', async (req, res, next) => {
      const { shortId } = req.params;
      const post = await Post.findOne({shortId,}); // shortId 로 게시글 찾기
      
      if (req.query.edit) {
        res.render('post/edit', { post });
        return;
      }
      
      res.render('post/view', { post });
    });
    
    router.post('/', async (req, res, next) => {
      const { title, content } = req.body;
      
      try {
        if (!title || !content) {
          throw new Error('제목과 내용을 입력해 주세요');
        }
        
        const post = await Post.create({title, content}); // 게시글 생성
        res.redirect(`/posts/${post.shortId}`);
      } catch (err) {
        next(err);
      }
    });
    
    router.post('/:shortId', async (req, res, next) => {
      const { shortId } = req.params;
      const { title, content } = req.body;
      
      try {
        if (!title || !content) {
          throw new Error('제목과 내용을 입력해 주세요');
        }
        
        // shortId 로 게시글 수정
        await Post.updateOne({shortId}, {title, content})
        res.redirect(`/posts/${shortId}`);
      } catch (err) {
        next(err);
      }
    });
    
    router.delete('/:shortId', async (req, res, next) => {
      const { shortId } = req.params;
      // shortId 로 게시글 삭제
      await Post.deleteOne({shortId});
      res.send('OK');
    });
    
    module.exports = router;
    ```
    

### Pagination

- 값이 전달이 되지 않는 경우를 위해 OR 연산을 사용하여 기본값을 설정할 수 있다.
- skip의 경우 한 페이지당 표시할 페이지 수 * (현재 페이지 - 1)로 생략하는 기능이다.

```jsx
const page = Number(req.query.page || 1)// url 쿼리에서 page 받기, 기본값 1
  const perPage = Number(req.query.perPage || 10)// url 쿼리에서 peRage 받기, 기본값 10
  
  const [total, posts] = await Promise.all([
    Post.countDocuments({}),
    Post.find({})
    .sort({createdAt: -1})
  .skip(perPage * (page - 1))
  .limit(perPage)
  ])
```

### PM2

- 특징
    
    안정적인 프로세스 실행 - 오류발생 시 자동 재실행
    빠른 개발환경 – 소스 코드 변경 시 자동 재실행
    배포 시 편리한 관리 - pm2 에 모든 프로세스를 한 번에 관리
    
- 사용법
    
    $ pm2 init simple 혹은
    $ pm2 init 명령어를 이용하여
    pm2 설정파일 예제를 만들 수 있음.
    예제를 수정하여 설정파일을 생성한 후,
    $ pm2 start 명령어를 실행하면
    어플리케이션을 pm2 데몬으로 실행해 줌
    개발 시 watch 옵션 사용하여
    파일 변경 시 서버 자동 재실행 구성
    

# 학습자료집 1

# 코드 리포트

## Luna 폭망 (99%)

실화) 3억 → 3만원 

## META, Jest를 OpenJS 재단으로 이관

[Meta Open Source is transferring Jest to the OpenJS Foundation](https://engineering.fb.com/2022/05/11/open-source/jest-openjs-foundation/)

- 가장 많이 사용되는 오픈소스 JavaScript 테스팅 프레임워크인 Jest를 OpenJS로 이관
- 2011년에 페이스북의 채팅 기능을 JS로 재작성 중에 개발되었고, 2014년에 오픈소스로 공개
- 초기엔 페이스북 엔지니어들에 의해 파트타임으로 관리되었고, 2018년에 Jest Open Collective를 발표해서 외부 직원들이 유지보수 시작
- 이제 jQuery, Node.js, Electron 등을 호스팅하는 OpenJS 재단으로 이관→ IBM, Google, Intel, Joyent, Microsoft 등이 회사 멤버로 있음
- Jest 자체에 변경되는 것은 없음

## Flutter 3 공개

[Introducing Flutter 3](https://medium.com/flutter/introducing-flutter-3-5eb69151622f)

- 모바일에서 멀티플랫폼 프레임워크로 가는 완성→ iOS/Android/웹/윈도우/맥/리눅스
- 애플 실리콘 지원(유니버설 바이너리)
- Material Design 3
- Flutter/Firebase 연동이 Firebase 코어에 통합(소스 및 문서)되어 더 많은 지원을 받게 될 것
- Flutter Casual Games Toolkit 출시

## **State of CSS 2022**

[State of CSS 2022](https://web.dev/state-of-css-2022/)

## 당근마켓 서머테크 인턴십

[당근마켓 2022 SUMMERTECH 인턴십](https://summertech.daangn.com/)

## 구글 머신러닝 부트캠프 Korea 런칭

[Machine Learning Bootcamp - 프로그램 소개](https://events.withgoogle.com/google-developers-mlb-kr-2021/)

---

# 복습

## REST란?

REpresentational State Transfer

RESTful API → REST 아키택쳐를 따른 API

## CRUD란?

Create, Read, Update, Delete

## Mongoose Query

### 생성하기

```jsx
User.create({name: "Daniel", age: 13})
```

### 읽기

User의 모든 데이터 읽기

```jsx
User.find({조건, 없으면 다 가져옴})
```

User의 데이터 중 하나만 찾기

```jsx
User.findOne({name: "Daniel"})
```

### 업데이트 (수정)

User의 모든 데이터 수정

```jsx
User.updateMany({필터},{엎데이트 할 내용})
```

User의 데이터 중 하나만 수정

```jsx
User.updateOne({name: "Daniel"},{age: 20})
```

### 삭제

User의 모든 데이터 삭제

```jsx
User.deleteMany({필터},{엎데이트 할 내용})
```

User의 데이터 중 하나만 삭제

```jsx
User.deleteOne({name: "Daniel"},{age: 20})
```

## request에서 params, body, query 의 차이점

### 1. req.param

주소에 포함된 변수를 담는다. 예를 들어 `https://example.com/post/12345` 라는 주소가 있다면 `12345`를 담는다.

### 2. req.query

주소 바깥, ? 이후의 변수를 담는다. 예를 들어 `https://okky.com/post?q=Javascript` 일 경우 `Javascript`를 담는다

### 3. req.body

XML, JSON, Multi Form 등의 데이터를 담는다.

# 실습 1

## Mongoose 연결하기

```jsx
mongoose
  .connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
```

## Schema 모델 작성하기

Field 목록

- shortId
- 게시글 제목
- 게시글 내용
- 작성자 (default를 작성자로)

예시:

```jsx
const mongoose = require("mongoose");
const shortId = require('./types/short-id');

// Define Schemes
const userSchema = new mongoose.Schema(
  {
		shortId,
    name: { type: String, required: true },
    phone: { type: String, required: true },
    bank_balance: { type: Number, default: 10000 },
  },
  {
    timestamps: true,
  }
);

// Create Model & Export
module.exports = mongoose.model("User", userSchema);
```

## Create 작업 수행하기

```jsx
const { Router } = require('express');
const { Post } = require('../models');

const router = Router();

router.get('/', async (req, res, next) => {
  if (req.query.write) {
    res.render('post/edit');
    return;
  }
  
  const posts = // 게시글 목록 (비동기 처리)
  
  res.render('post/list', { posts });
});

router.get('/:shortId', async (req, res, next) => {
  const { shortId } = req.params;
  const post = // shortId 로 게시글 찾기 (findOne 사용)
  
  if (req.query.edit) {
    res.render('post/edit', { post });
    return;
  }
  
  res.render('post/view', { post });
});

router.post('/', async (req, res, next) => {
  const { title, content } = req.body;
  
  try {
    if (!title || !content) {
      throw new Error('제목과 내용을 입력해 주세요');
    }
    
    // 4. 서버에 POST request를 보내서 브라우저에서 CREATE 작업을 수행하세요. 
    const post = // 게시글 생성 (비동기를 이용해 create 사용)
    res.redirect(`/posts/${post.shortId}`);
  } catch (err) {
    next(err);
  }
});

//5. router에 post() 메소드를 추가해서 /:shortID 의 주소의 요청일 때만 게시글 생성 작업을 실행하세요.
router.post('/:shortId', async (req, res, next) => {
	// shortId는 param,
	// title, content는 body에서 가져오기

	try {
    if (!title || !content) {
      throw new Error('제목과 내용을 입력 해 주세요');
    }
    
    // shortId 로 게시글 수정 (updateOne 이용)
    await ...
		//redirect 사용
    res.redirect(`/posts/${shortId}`);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
```

## 실습 정답 코드

**`models/schemas/post.js`**

```jsx
//models/schemas/post.js

const { Schema } = require('mongoose');

const shortId = require('./types/short-id');
const PostSchema = new Schema({
 shortId,
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: '작성자',
  }
}, {
  timestamps: true,
});

module.exports = PostSchema;
```

`app.js`

```jsx
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dayjs = require('dayjs');

const indexRouter = require('./routes');
const postsRouter = require('./routes/posts');

//1. mongoose.connect()를 사용해서 mongodb 데이터베이스를 연결하세요.
mongoose.connect('mongodb://localhost:27017/simple-board');
mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected');
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/posts', postsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
```

**`routes/posts.js`**

```jsx
const { Router } = require('express');
const { Post } = require('../models');

const router = Router();

router.get('/', async (req, res, next) => {
  if (req.query.write) {
    res.render('post/edit');
    return;

  }
  
  // 게시글 목록
  const posts = await Post.find({});
  
  res.render('post/list', { posts });
});

router.get('/:shortId', async (req, res, next) => {
  const { shortId } = req.params;
  // shortId 로 게시글 찾기

  const post = await Post.findOne({ shortId });
  
  if (req.query.edit) {
    res.render('post/edit', { post });
    return;
  }
  
  res.render('post/view', { post });
});

router.post('/', async (req, res, next) => {

  const { title, content } = req.body;
  
  try {
    if (!title || !content) {
      throw new Error('제목과 내용을 입력 해 주세요');
    }
    
    // 게시글 생성
    const post = await Post.create({
      title,
        content,
    });
    
    res.redirect(`/posts/${post.shortId}`);
  } catch (err) {
    next(err);
  }
});

router.post('/:shortId', async (req, res, next) => {
  const { shortId } = req.params;
  const { title, content } = req.body;
  
  try {
    if (!title || !content) {
      throw new Error('제목과 내용을 입력 해 주세요');
    }
    
    // shortId 로 게시글 수정
    await Post.updateOne({ shortId }, {
      title,
        content,
    });
    res.redirect(`/posts/${shortId}`);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
```

---

# 실습 2

deleteOne을 이용하여 삭제

```jsx
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  // shortId 로 게시글 삭제
  await Post.deleteOne({ id });
  res.send('OK');
});
```

## 실습 정답 코드

```jsx
router.delete('/:shortId', async (req, res, next) => {
  const { shortId } = req.params;
  // shortId 로 게시글 삭제
  await Post.deleteOne({ shortId });
  res.send('OK');
});
```

---

# 실습 3

## Index.js 세팅

JSON과 urlEncoded 세팅

```jsx
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```

라우터 사용

```jsx
const postRouter = require(경로)
app.use('/api/post', postRouter);
// or
app.use('/api/post', require(경로));
```

## Post.js 세팅

```jsx
router.post('/', (req, res) => {
  const newMember = {
    id, name, email, status (status는 active로) 추가
  };

  
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

	// members에 push로 새로운 멤버 추가
  res.json(members);
});
```

## 실습 정답 코드

**`routes/api/members.js`**

```jsx
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

const idFilter = req => member => member.id === parseInt(req.params.id);

// Gets All Members
router.get('/', (req, res) => res.json(members));

// Get Single Member
router.get('/:id', (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    res.json(members.filter(idFilter(req)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// 사용자 추가하기
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  };

  
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  members.push(newMember);
  res.json(members);
  // res.redirect('/');
});

// 사용자 업데이트
router.put('/:id', (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    members.forEach((member, i) => {
      if (idFilter(req)(member)) {

        const updMember = {...member, ...req.body};
        members[i] = updMember
        res.json({ msg: 'Member updated', updMember });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// 사용자 삭제하기
router.delete('/:id', (req, res) => {
  const found = members.some(idFilter(req));

  if (found) {
    res.json({
      msg: 'Member deleted',
      members: members.filter(member => !idFilter(req)(member))
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = router;
```

**`index.js`**

```jsx
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// 1. express 미들웨어를 사용하세요.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) =>
  res.render('index', {
    title: '사용자 등록',
    members
  })
);

// Set static folder 생성 -> 정적으로 라우터에 해당하는 페이지가 작동합니다.
app.use(express.static(path.join(__dirname, 'public')));

//2. rest API members를 라우팅하세요.
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
```

# 학습자료집 2

## **1. Form(폼)과 api 요청**

---

예를 들어 회원가입 폼이라고 한다면, 사용자가 입력한 이메일, 비밀번호, 이름, 프로필 사진 등이 있습니다.**입력된 값들은 백엔드 서버로 전송**되어야 합니다.

백엔드 서버는, 전송되어 온 값들을 **데이터베이스(하드디스크 혹은 SSD 기반)에 저장**해야 합니다.워드파일, 한글파일을 저장하듯이, 위 값들도 저장해야 합니다.

저장해야, 로그인 때, **로그인 시의 비밀번호를 회원가입 당시의 비밀번호 등과 비교**할 수 있습니다.

우선, 프론트엔드에서 백엔드에 값들을 전송해야 합니다. **전송은 결국 api 요청**입니다.물론 다양한 방법이 있지만, 우선 **JSON 데이터 전송**을 알아보겠습니다.

**(1) JSON 데이터 전송**

회원가입 시의 JSON 데이터 전송 예시입니다.

![https://cdn-api.elice.io/api-attachment/attachment/c00899b70a404e179c4ab5dd68209c30/image.png](https://cdn-api.elice.io/api-attachment/attachment/c00899b70a404e179c4ab5dd68209c30/image.png)

중요한 것은 하기입니다.

1. **URI**는 “[http://localhost:5000/api/register"](http://localhost:5000/api/register%22) 임. (미리 백엔드가 정한 URI)
2. **메소드**는 POST임. (미리 백엔드가 정한 메소드)
3. **전송 데이터**는 JSON 형태임. (미리 백엔드와 협의한 형태)

이를 위한 fetch 코드는 하기입니다.

```
const apiUrl = "http://localhost:5000/api/register"

// 우선 객체를 만듦const data = {
    fullName: "튜터",
    email: "tutor-sw2@elice.com",
    password: "abc123"
}

// 객체를 JSON 형태로 변환함const dataJson = JSON.stringify(data)

const res = await fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: dataJson,
});

// 응답 관련 정보console.log("api 통신이 문제 없이 잘 이루어졌는지: ", res.ok)// true 혹은 falseconsole.log("응답 코드: ", res.status)// 200, 201, 400 등
```

우선 객체를 만들고, 이를 JSON으로 변환한 후, fetch로 api요청을 하는 형태입니다.

참고로, **응답의 문제없음 여부(res.ok), 응답 코드(res.status)** 등도 알 수 있습니다.

**`'Content-Type': 'application/json'` 을 잊지 말도록** 합니다.JSON을 전송할 때에는, JSON 데이터 형태를 보낸다는 것을 명시해야 합니다.

## **1. Daum 주소 Api**

---

쇼핑몰 사이트에서는 주문 시 **배송지 주소를 입력**해야 합니다.다음(카카오)에서는 아래와 같은 **주소 선택 기능을 편하게 구현할 수 있는 서비스를 무료로 제공**합니다.

[https://postcode.map.daum.net/guide](https://postcode.map.daum.net/guide)

![https://cdn-api.elice.io/api-attachment/attachment/670d24f8b2564da5a383f47eecdd5e90/6.gif](https://cdn-api.elice.io/api-attachment/attachment/670d24f8b2564da5a383f47eecdd5e90/6.gif)

**(1) 다음 우편번호 서비스(Api) 알아보기**

전체적인 흐름은 아래와 같습니다.

![https://cdn-api.elice.io/api-attachment/attachment/2296c99e86df43ea846aa14b17d900e6/image.png](https://cdn-api.elice.io/api-attachment/attachment/2296c99e86df43ea846aa14b17d900e6/image.png)

우리들은, 하기 2가지를 진행하면 됩니다.

1. html의 head 태그 안에, 아래 태그를 추가

```
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

```

1. **oncomplete 함수를 작성**

나머지는 다음(카카오) 주소 서비스가 알아서 해 주는 것입니다.

예를 들어, 아래와 같이 코드가 작성되면 됩니다.

- 예시 코드
    
    ```jsx
    const searchAddressButton = document.querySelector('#searchAddressButton');
    
    searchAddressButton.addEventListener('click', searchAddress);
     
    function searchAddress() {
      new daum.Postcode({
        oncomplete: function (data) {
          let addr = '';
          let extraAddr = '';
    
          if (data.userSelectedType === 'R') {
            addr = data.roadAddress;
          } else {
            addr = data.jibunAddress;
          }
    
          if (data.userSelectedType === 'R') {
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              extraAddr += data.bname;
            }
            if (data.buildingName !== '' && data.apartment === 'Y') {
              extraAddr +=
                extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
            }
            if (extraAddr !== '') {
              extraAddr = ' (' + extraAddr + ')';
            }
          } else {
          }
    
          postalCodeInput.value = data.zonecode;
          address1Input.value = `${addr} ${extraAddr}`;
          address2Input.placeholder = '상세 주소를 입력해 주세요.';
          address2Input.focus();
        },
      }).open();
    }
    ```
    

코드가 길어 보이지만, 사실 [Api 설명 사이트](https://postcode.map.daum.net/guide)의 하단에 스크롤하면 있는 **예제 코드**를 거의 그대로 가져온 것입니다.

**중요한 점은 하기입니다.**

1. 특정 버튼에 이벤트 추가
2. 이벤트 -> 버튼 클릭 시, **`new daum.Postcode({옵션}).open()`**이 실행 됨.
3. 옵션의 oncomplete 함수를 작성함.
4. **oncmplete 함수는, html의 요소에 값을 삽입하는 방식**임

주입할 값이 헷갈릴 때에는, **console.log를 여러 번 하여, 어떤 값인지 확인**합니다.