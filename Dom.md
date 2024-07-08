DOM(Document Object Model)
- html 문서의 모든 tag 쌍을 `Document Object` 라고 한다
- DOM : html 문서의 모든 tag 쌍은 문서 객체이다.
- DOM은 일반적으로 `block`형과 `inline`형으로 구분한다.
- `block`형은 가로방향으로 화면 전체를 자신의 영역으로 갖는다.
- `inline`형은 실제 보여지는 부분만 자신의 영역으로 갖는다.
- `block`형은 대부분의 box를 그리는 tag들이다.
- `block`형은 `div`, `section`, `article`, `nav`, `ul`, `p` 등이 있다.
- `inline`형은 대표적으로 `a`, `strong`, `span`등이 있다.
- `block`형 box는 `width`, `height`등을 적용하여 보여지는 모양의 크기를
자유롭게 조절 할 수 있다.
- `inline`형은 `whith`, `height` 등을 적용 할 수 없다.
- layout을 구현할 때 `block`형 box를 가로방향으로 배치하고 싶을때가 있다.
이때 `block`형을 `inline`형의 성질을 갖게 할 수 있다.