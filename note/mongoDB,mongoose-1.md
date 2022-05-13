# MongoDB,Mongoose/2022-05-13

### NoSQL

Non SQL또는Not Only SQL

- 구조화된 질의어를 사용하지않는 데이터베이스
- 자료간의 관계에 초점을 두지않음
- 데이터를 구조화 하지 않고, 유연하게 저장함

### Nosql을 사용하는 이유

- SQL 사용을 위해 데이터 정의와 구조화(DDL)이 필수적인데(정의된 데이터 아니면 저장을 못하는 제약이 따름),
- NoSQL은 사전작업 없이 데이터베이스를 사용가능하고 DB작업에 크게 관여할 필요 없이 프로젝트를 빠르게 진행할 수 있음

### NoSQL과 Document DB

- 다양한 종류의 NoSQL, key-value, Graph, large collection 등의 NoSQL DB가 존재하지만,
- Document DB가 가장 일반적임

### Mongo DB 기본 개념과 구조

1. Database
    - 하나 이상의 collection을 가질 수 있는 저장소로, SQL의 Database와 유사
2. Collection
    - 하나 이상의 Document가 저장되는 공간으로, SQL의 table과 유사
    - 하지만, collection 이 document의 구조를 정의하지 않음
3. Document
    - 저장되는 자료
    - SQL 의 row 와 유사하지만, 구조제약 없이 유연한 저장이 가능
    - JSON과 유사한 BSON을 사용하여 다양한 자료형을 지원
        
        ### What is BSON?
        
        - Binary JSON의 약어로, JSON 문서를 바이너리로 인코딩한 포맷
        - 최초에 몽고 DB에서 제안하였으며, 주로 JSON 형태의 데이터를 저장하거나 네트워크 전송하는 용도로 사용된다. 바이너리 데이터를 JSON 구조에 추가할 수 있다는 장점이 있다
        1. ObjectID
            1.  각 document의 유일한 키 값
            2. SQL의 primary key와 유사
            3. 하나씩 증가하는 값이 아닌 document를 생성할 때 자동으로 생성되는 값
            
    
    ### MongoDB 사용법
    
    - 직접 설치 : 설치과정 필요, 얼마든지 데이터 사용 가능, 하지만 직접 모든 설정을 해야하고 Sharding이나 Replication 등 작업이 필요할 때 운영지식과 노하우가 필요, **Community Version**으로 무료 사용 가능
    - **MongoDB Cloud** 사용 : 모든 데이터베이스 기능을 웹에서 관리 가능, 사용량에 따른 요금 부과 (512MB까지는 평생 무료 가능)
    
    ### MongoDB Compass
    
    - 시각화 관리 도구, Mysql Workbench와 유사
    
    ### ODM
    
    - Object Data Modeling
    - MongoDB의Collection에집중하여관리하도록도와주는패키지
    - Collection을모델화하여, 관련기능들을쉽게사용할수있도록도와줌
    
    ### MongoDB에서 ODM 사용이유
    
    ### 연결관리
    
    - MongoDB의기본Node.js 드라이버는연결상태를관리하기어려움
    - Mongoose를사용하면간단하게데이터베이스와의연결상태를관리해줌
    
    ### 스키마관리
    
    - 스키마를정의하지않고데이터를사용할수있는것은NoSQL의장점이지만, 데이터형식을미리정의해야코드작성과프로젝트관리에유용함
    - Mongoose는Code-Level에서스키마를정의하고관리할수있게해줌
    
    ### ORM과 ODM?
    
    ORM과 ODM 모두 그 역할은 비슷하다. SQL계열, 즉 관계형 DB는 ORM(Object Relatinal Mapping), NoSQL계열 DB는 ODM(Object Data Mapping)에 해당된다 정도로 보면 되겠다. 따라서 굳이 각각을 알아보기보다는 ORM을 중심으로 알아보자.
    
    # MongoDB →
    
    ### Mongoose ODM과 Sequelize ORM
    
    ### ORM
    
    - ORM(Object Relational Mapping)은 객체 지향 프로그래밍에서의 객체(Object)와 관계형 데이터베이스(Relational DataBase, RDB)에 있는 데이터를 자동으로 매핑(Mapping) 즉, 연결하는 기술이다. 객체 지향적인 시스템을 위해서 관계형 데이터베이스의 설계에서부터 변화를 주어 설계된 데이터베이스와 객체와의 관계에 대한 설정까지 포함하므로 객체지향적 시스템을 위한 도구로 볼 수 있다.
    - ORM은 객체 지향 프로그래밍에서 사용할 수 있는 가상의 객체 지향 데이터베이스를 만들어서 데이터와 프로그래밍 코드를 연결하는데 이들은 서로 독립적이므로 재사용 및 유지보수가 용이하다.
    - 간결하고 빠른 가공, 비지니스 로직에 집중 가능
    - 프로젝트 안에서 자주 사용되는 대형의 SQL 실행문은 속도를 위해 별도의 작업이 필요할 때가 있어서 결국에는 SQL 실행문을 써야 할 수도 있다.
    
    ### MongoDB는 Join을 제공하지 않지만 대신 Populate로 간편한 관리가 가능하게함
    
    ### Mongoose
    
    - in : 속성명: [포함여부를 확인할 원소들, a, b, ...]
    - 즉 {$in: [대상] } 과 동일하다.
    
    ```jsx
    const posts = await Post.find({
        author: ['andy', 'bob', 'kate']
      });
    ```
    
    ### 예시
    
    1. **`mongoose.connect`** 에 몽고디비 커넥션 문자열을 추가하여 디비에 접속합니다.
        - 접속 주소는 "mongodb://localhost:27017/exam_5" 입니다.
    2. 작성자는 "andy", "bob", "kate" 중에 한 명입니다.
    3. 좋아요("likes") 수는 5개보다 크고, 10개보다 작거나 같습니다.
    4. 게시글 분류("category")는 없거나 "notice" 입니다.
    
    ```jsx
    const mongoose = require('mongoose');
    const { Post } = require('./models');
    // 몽고디비 연결
    mongoose.connect("mongodb://localhost:27017/exam_5");
    
    async function main() {
      const posts = await Post.find({
        author: ['andy', 'bob', 'kate'],
        likes: {
            $gt: 5,
            $lte: 10,
        },
        $or: [
            { category: {$exists: false } },
            { category: 'notice' },
        ]
      });
      return posts;
    }
    ```
    
    Populate 하기 위해서는 type: Schema.Types.ObjectId,로 지정해줘야 한다.
    
    ### 예시