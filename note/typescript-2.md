# TypeScript/2022-05-05

### class

- public: 모든 곳에서 접근 가능
- private: 자기 자신 클래스에서만 접근 가능
- protected: 자기 자신 클래스와 상속된 자식 클래스에서만 접근 가능

### getters & setters

비공개로 설정하려는 속성은 private로 설정하고, 속성값을 읽고 수정하는 getter/setter 함수를 사용한다.

### readonly

읽기만 가능한 속성을 선언하기 위해 사용한다.

### static

전역 멤버를 선언할 때 사용한다.
전역멤버 : 객체마다 할당되지 않고 클래스의 모든 객체가 공유하는 멤버

- static의 접근방식

```jsx
class Grid {
  static origin = { x:0, y:0 }
  
  calculateDistance(): void {
    console.log(Grid.origin.x * Grid.origin.y);
  }
}

const grid = new Grid();

// 외부에서 Grid origin 값 변경
Grid.origin = { x:3, y:3 } 
grid.calculateDistance(); // "9" 출력
```

### 추상 클래스