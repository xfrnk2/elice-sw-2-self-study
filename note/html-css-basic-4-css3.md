### 오답 노트

- 변하기 전의 object의 style에 property, duration 등을 종합적으로 적용해야 정상 반영이 된다. 나는 hover에 지정해야하는 줄 알았다.

```html
.transition {
      width: 100px;
      height: 100px;
      background-color: red;
      transition-property: width;
      transition-duration: 2s;
      transition-timing-function: linear;
      transition-delay: 1s;
      transition: width 2s linear 1s;
    }
    
    .transition:hover {
      width: 300px;
    }
```

### CSS3 (TTA)

- transform
    - rotate : 평면적인 회전 `rotate(00deg)`
    - scale : 비율(0.5도 가능, 1 기본) `scale(width배율, height배율)`
    - skew : 입체적인 회전 `skew(10deg, 20deg)` x축기준 00도, y축기준 00도
    - translate : 선택 오브젝트 위치 변경 `translate(100px, 200px)` x축기준 00px만큼, y축기준 00px만큼 옮기겠다.
    최근엔 margin이나 padding이 아니라 이 translate를 통해서 변경하기도 한다.
    - 기타)prefix
        - transform 단독 입력으로는 익스플로러 하위버전에서 사용 불가 (transfor이 m최신 기술이므로)
        - prefix를 사용하면 다른 브라우저에서도 사용 가능, 하위 버전의 브라우저에서도 사용하도록 하고자 한다면 prefix가 필요. 최신 버전이라면 prefix를 생략해도 됨.
- transition
    - transition 종합 표기시 먼저 나오는 숫자가 duration, 다음 나오는 숫자가 delay.
    ex)  transition: `property` `duration` `timing function` `delay`
        - 숫자가 하나인 경우는 무조건 duration임.
        - ex) → `transition: width 2s linear 1s`
        1초 후에 width가 2초 동안 일정한 속도로 변하는 애니메이션 효과
- animation
    - 사용자와의 별도의 상호작용(hover와 같은) 없이 동작
    - 속성
        - animation-name: 원하는 이름 가능(class 지정하듯이)
        ex) animation-name: changeWidth;
        - animation-iteration-count: 반복횟수(6)
        - animation-direction : 올 수 있는 값
            - 올 수 있는 값
                - alternate : from → to → from
                - normal : from → to
                - reverse: to → from
    - 필수 동반 명령어 : @keyframes , style 란에 함께 작성
        - 사용 방법
            
            ```html
            .animation {
            	animation-name: changeWidth;
            ....
            }
            
            @keyframes changeWidth {  // animation-name 입력
            from {width: 300px; }
            to {width: 600px; }
            } 
            ```
            
    - transition과 마찬가지로 종합 지정시 순서는 상관 없음
    - duration 다음으로 delay가 나옴
    - transition과 마찬가지로 prefix를 달 수 있다.
    - 만일 prefix가 붙은 animation을 작성했다면,
    @keyframes도 prefix가 붙어야 한다. ▽
    
    ex)
    
    ```html
    .box1 {
    	animation: rotation 1500ms linear infinite alternate;
    } // 1500ms = 1.5 s
    
    @-webkit-keyframes rotation {
    from { -webkit- tramsform: rotate(-10deg);}
    to { -webkit- transform: rotate(10deg);}
    }
    ```