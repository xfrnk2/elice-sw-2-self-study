### git은 중앙 집중형이 아닌 분산 집중형 버전 관리 시스템

**`git init`** : git저장소 생성 (init 뒤에 저장소 이름을 입력하거나, 해당 디렉토리에서 현 명령어 실행)

**`git config --global user.name "<이름>"`** : git관련 작업 기록에 남는 이름 수정

**`git config --global user.email "<이메일>"`** : git관련 작업 기록에 남는 이메일 수정

**`git config --list`** : git 설정 확인



커밋 메세지 수정 : `git commit --amend -m "add main.py"`



작업을 위해 만든 토픽 브랜치는 작업이 완료되고 나면 **master**
브랜치에 병합을 한 뒤 삭제하는것이 일반적



git pull origin master는 `$ git fetch origin master` → `git merge origin/master`로 대체될수 있다. 


****

### snapshot

staging 되어진데이터들(Index)을commit 명령으로영구히 저장한 것을 snapshot.

HEAD 역시 snapshot이며, 위치해있는 branch를가리키는 포인터의역할을 수행

### HEAD를이용한 버전 관리

`git reset --<option> HEAD~` 을이용하여 HEAD를 전의 snapshot으로 이동 시킬 수 있다.

### rebase

rebase는 브랜치가 너무 많아져서 history 정리가 필요한 상황에 사용.

충돌시 `git add`와  `git rebase --continue`  명령어로 정리

ex) `git rebase master`

→ 현재 위치해있는 브랜치의 commit 부터 master의 공통된 부모 전까지의 commit 을 master 옆에 이어붙인다는 의미

### 몰랐던 사실

git add와 commit을 아래와 같은 형식의 명령으로도 수행할 수 있다.

```html
git add .
git commit -m "엘리스 토끼" quotes/politics.txt quotes/science.txt 

git commit -m "모자장수" quotes/music.txt quotes.py README.md
```