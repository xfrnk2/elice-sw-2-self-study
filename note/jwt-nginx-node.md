- jwt 로그인 미들웨어를 사이에 추가해주어야 정상 동작한다.

```jsx
app.use(passport.initialize());
//app.use(passport.session());
// jwt 로그인 미들웨어 추가
app.use(getUserFromJwt);

app.use('/', indexRouter);
app.use('/posts', loginRequired, postsRouter);
app.use('/users', loginRequired, usersRouter);
app.use('/api', loginRequired, apiRouter);
app.use('/auth', authRouter);
```

- 메일 제목과 내용 순으로 전달인자를 입력한다.

```jsx
// 패스워드 발송하기
  await sendMail(email, '비밀번호가 변경되었습니다.', `변경된 비밀번호는: ${password} 입니다.`);
```

### res → send와 json의 차이

불필요한 함수 호출이 한번 더 발생하는 것은 어쨌든 추가 비용은 발생하는 것이기 때문에, JSON 응답을 한다면 `res.send`보다 `res.json`이 적절한 것 같다.

또한 소스코드를 읽을 때에도 `res.json`이 JSON 데이터를 보낸다는 의도가 더 명확하게 드러난다. 예를 들어서 `res.send({data:1})`라면 객체를 즉시 생성해서 전달하기 때문에 JSON을 응답하는 것을 유추할 수 있지만, `res.send(data)`처럼 객체의 참조값을 변수에 담아서 인자로 넘긴다면 JSON 응답을 하는지 쉽게 구분이 가지 않을 것이다.

출처 : [https://haeguri.github.io/2018/12/30/compare-response-json-send-func/](https://haeguri.github.io/2018/12/30/compare-response-json-send-func/)

더 자세한 글 출처 : [https://velog.io/@tmpks5/Express-res.send-VS-res.json-VS-res.end](https://velog.io/@tmpks5/Express-res.send-VS-res.json-VS-res.end)

# 학습자료집 1