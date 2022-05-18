### 오답 메모

- 틀린 문항 : Secret Key를 알고 있다면 복호화가 가능하다.

⇒ Hash 함수는 단방향 암호화 함수로,

Hash 값을 알더라도 원본 문자열을 알아낼 수 없다.

- 틀린 문항 : Session Store를 사용하더라도 각 서버는 분리된 세션 저장소를 필요로 한다.

⇒ Session Store를 사용하면 서버 간 동일한 세션 저장소를 공유할 수 있다.

### MongoDB populate

populate를 맹신해서는 안 됩니다. populate는 $oid로 모두 조회를 해서 자바스크립트 단에서 합쳐주는 것이지 JOIN처럼 DB 자체에서 합쳐주는 것이 아닙니다. 따라서 성능이 그렇게 좋지는 않습니다. 특히 populate가 중첩되면 성능 문제가 생길 확률이 커집니다.

### examples

```jsx
const Post = mongoose.model('Post', PostSchema);
Post.getPaginatedPosts = async (query, page, perPage) => {  
  const [total, posts] = await Promise.all([
    Post.countDocuments(query),
    Post
      .find(query)
      .sort({ createdAt : -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .populate('author'), // populate 추가하기
  ]);
```

```jsx
router.post('/:shortId', asyncHandler(async (req, res) => {
  const { shortId } = req.params;
  const { title, content } = req.body;
  
  if (!title || !content) {
    throw new Error('제목과 내용을 입력 해 주세요');
  }
  
  const post = await Post.findOne({ shortId }).populate('author'); // 작성자 populate
  // 작성자와 로그인된 사용자의 shortId 가 다를경우 오류 발생
  if (post.author.shortId !== req.user.short) {
    throw new Error('작성자가 아닙니다.');
  }
    
  await Post.updateOne({ shortId }, { title, content });
  res.redirect(`/posts/${shortId}`);
}));
```

**MongoDB Aggregation**
은 여러 document들을 grouping하여 연산을 수행한 후 하나의 result를 반환하는 연산입니다

### 서브스키마로 배열로 선언하는 예시

- 필드는 sub-schema를 사용하여 CommentSchema의 배열로 선언합니다.