# ✅너To나Do : Multi Plan Service

---

![image.png](image.png)

## 1. 프로젝트 소개

- 본 프로젝트는 ‘계획’에 관련된 다양한 유형을 한 번에 이용가능하도록 제작되었습니다.
- 현재 이용 가능한 서비스에는 기본 투두리스트, 습관 트래커, 그리고 간단한 캘린더가 있습니다.
- (추후 개발 예정) 다양한 유형을 한 페이지에 담아 사용할 수 있습니다.
- (추후 개발 예정) 원하는 유형을 선택해 나만의 Todo 페이지를 만들 수 있습니다.

# 2. 개발 환경

- Front: Html, React
- Back: Node.js(Express)
- DB: Mysql
- Design: [Figma](https://www.figma.com/file/IdRGhcelyqBPXyYINirMMX/%C3%AB%C2%84%C2%88To%C3%AB%C2%82%C2%98Do-%C3%AA%C2%B5%C2%AC%C3%AD%C2%98%C2%84-%C3%AD%C2%99%C2%94%C3%AB%C2%A9%C2%B4?type=design&node-id=0:1&mode=design&t=zAK8wZ91iPpiH4F6-1)

# 3. 설치 방법

1. 프로젝트를 클론합니다.

```bash
git clone https://github.com/yeojin-g/Web-Client-Computing.git
```

2. 프로젝트 폴더로 이동합니다.

```bash
cd Web-Client-Computing
```

3. 프로젝트 의존성을 설치합니다. **`legacy-peer-deps`** 플래그를 사용하여 설치합니다.

```bash
npm install --legacy-peer-deps
```

4. MySQL 데이터베이스를 설정합니다.
    - MySQL을 설치하고 실행합니다.
    - 데이터베이스를 생성하고, 사용자와 권한을 설정합니다.

5. **`.env`** 파일을 생성하고, 아래의 형식에 맞게 데이터베이스 연결 정보를 설정합니다.

```makefile
DB_HOST=localhost
DB_USER=myusername
DB_PASS=mypassword
DB_NAME=mydatabase
```

6. 데이터베이스에 테이블을 생성합니다. 아래의 스키마 생성 코드를 실행하거나, SQL 파일을 데이터베이스에 import합니다.

```sql
sqlCopy code
-- 스키마 생성 코드
CREATE TABLE IF NOT EXISTS User (
    ID VARCHAR(45) PRIMARY KEY,
    Pw VARCHAR(45),
    Name VARCHAR(45),
    Email VARCHAR(45)
);

CREATE TABLE IF NOT EXISTS basicTodo (
    cnt INT AUTO_INCREMENT PRIMARY KEY,
    idx INT,
    ischeck TINYINT,
    ID VARCHAR(45),
    todoText VARCHAR(255),
    FOREIGN KEY (ID) REFERENCES User(ID)
);

CREATE TABLE IF NOT EXISTS habbittracker (
    cnt INT AUTO_INCREMENT PRIMARY KEY,
    idx INT,
    ID VARCHAR(45),
    habbitName VARCHAR(45),
    checkButtonL JSON,
    FOREIGN KEY (ID) REFERENCES User(ID)
);
```

7. 서버를 실행합니다.

```bash
npm start
```

8. 웹 브라우저에서 **`http://localhost:8000`**으로 접속하여 프로젝트를 확인합니다.

## **사용법**

# 4. 기타 사항

- 로그인 후 메인 페이지에 뜨는 시간표는 아직 기능 구현이 되지 않았습니다.
- ’/src/pages/Mainpage2‘ 파일은 현재 단계에서는 실제로 사용[자에게](https://www.figma.com/file/IdRGhcelyqBPXyYINirMMX/%C3%AB%C2%84%C2%88To%C3%AB%C2%82%C2%98Do-%C3%AA%C2%B5%C2%AC%C3%AD%C2%98%C2%84-%C3%AD%C2%99%C2%94%C3%AB%C2%A9%C2%B4?type=design&node-id=0:1&mode=design&t=zAK8wZ91iPpiH4F6-1) 보이지 않습니다. 이는 추후 추가될 기능에 필요한 페이지로 현재는 필요하지 않습니다.
- 새로고침을 누를 경우 재 로그인이 필요합니다.
