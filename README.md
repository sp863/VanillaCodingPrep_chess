# 체스 게임 (2인 플레이)

### 체스게임 설명 및 기능 요구사항

- 가로와 세로 각각 8줄씩 (8x8) 64칸으로 된 게임판에서 두 명의 플레이어가 말들의 규칙에 따라 움직여 상대방의 킹을 잡기 직전의 상황을 만들면 승리하는 게임
- '2인 플레이 체스 게임'은 컴퓨터와 대결하는 체스게임이 아닌 2명의 플레이어가 각자 움직을 클릭을 통해 입력하여 플레이하는 게임 프로그램
- 일반적인 체스 게임 Rule 과 Convention 을 최대한 따르 도록 설계

- 말들의 종류 및 움직임 규칙

  - 플레이어 색깔별로 16개씩 총 32개
  - 하얀색 플레이어가 항상 선으로 공격을 함. Player White
  - Rook : 다른 말이 길을 막지 않는 한, 가로세로 방향으로 몇 칸이든 이동할 수 있음.
  - Bishop : 다른 말이 길을 막지 않는 한, 대각선 방향으로 몇칸이든 이동할 수 있음.
  - Queen : 다른 말이 길을 막지 않는 한, 가로세로 대각선 방향으로 몇칸이든 일직선 이동할 수 있음 (Rook과 Bishop의 움직임을 합친 개념)
  - King : 가로세로 대각선으로 한칸 이동. 다른 말처럼 상대 말을 공격해 잡을 수 있지만 상대의 킹을 잡을 수는 없음.
  - Knight : 가로 혹은 세로 방향으로 한 칸 이동한 뒤 대각선으로 한칸 이동. 이동하려는 길에 다른 말이 있어도 뛰어넘어서 이동 가능.
  - Pawn : 폰은 앞으로만 이동. 옆이나 뒤, 또는 대각선으로 이동할 수 없음. 하지만 상대 말을 잡을때는 앞쪽 대각선으로만 잡을 수 있음. 한번도 움직이지 않은 폰은 앞쪽으로 한칸이나 두칸을 자유롭게 이동 가능하지만 한 번 이상 이동한 폰은 한칸씩만 전진 할 수 있음.

- 특별 규칙

  - Promotion : 폰이 전지을 계속해 게임판 반대쪽 끝에 도착 하면 폰을 퀸, 룩, 비숍, 나이트 가운데 하나로 바꿀 수 있음.
  - Castling : 아래 4개의 제약 조건이 없다면, 킹의 위치와 룩의 위치를 조정해 킹이 성안으로 들어가 안전하게 대피하는 상황을 만들 수 잇음.
    - King Side Castling : 킹이 오른쪽으로 두 칸 가고, 룩이 킹을 뛰어 넘어 킹 옆으로 옴
    - Queen Side Castling : 킹이 왼쪽으로 두 칸 가고, 룩이 킹을 뛰어넘어 킹 옆으로 옴
    - 4가지 제약 조건 (캐슬링이 허용되지 않는 경우)
      - 킹과 룩 사이에 다른 말이 있을때.
      - 킹이나 룩이 움직였을 때.
      - 킹이 상대의 말에게 직접 (체크) 당하고 있을때.
      - 킹이 캐슬링으로 지나가는 칸이 상대 공격권 내에 있을 때.

- 체크 : 킹을 공격하는 상태를 체크라고 함.
  - 킹을 공격하고 있는 상대 말을 잡아서 피하거나
  - 킹을 공격하고 있는 상대 말의 진로를 막거나
  - 킹이 움직여 상대의 공격을 피해야 함
- 체크메이트 : 체크가 된 상태에서 이 상태를 해결할 수 없을 때 체크메이트라고 함. 킹을 잡을 수 없기 때문에 체크메이트 당한 쪽이 킹을 스스로 쓰러드려 진것을 인정하는 것으로 게임이 끝남

### 체스게임 플로우

- 하얀색 플레이어 선 공격으로 하고 다음턴은 검정색 플레이어로 자동으로 순서가 돌아감
- 현재 턴 상황은 Player Turn 에서 확인 가능
- 본인턴 일때 플로우 방식
  - 말선택
  - 위치 선택
    - 잘못된 위치 선택시 alert 창으로 'Invalid Move' 보여줌
  - 특별 규칙이 가능 할 시 Promotion, Castling 을 시행할 수 있음
- 턴이 끝날때 현재 상대방의 King을 체크된 상황인지 검사하고 공격 범위에 있을 시 on check 메세지가 보임
- 턴이 모두 끝나면 Check Mate 를 확인 후 게임 종료 여부를 확인
- Check Mate 상황이 확인 되었을 시 게임 종료 되며 보드는 확인 가능 하지만 클릭은 할 수 없음
- RESTART 를 눌러 게임을 초기화 시키고 다시 play 할 수 있음

### 체스게임 기능 목록

- 입력 및 클릭
  - [x] 말선택 클릭
  - [x] 위치선택 클릭 (위치에 상대방 말이 있을 수 있음)
    - [x] 특정 말 선택 후 가동 범위 내에 색깔이 다른 상대방 말이 있을 시 상대방 말이 없어지고 선택된 말이 그 자리에 이동
  - 특별 규칙 일 시
    - Pawn Promotion
      - [x] 어떤 말로 폰을 승진 시킬 지 입력
    - Castling (가능 할 시 King이나 Rook을 선택 할 시)
      - [x] Castling을 시행 할건지 말건지 입력
      - [x] Queen Side Castling / King Side Castling 선택 (하나만 가능 할 시 Castling에 동의 하는 동시에 자동으로 가능 한 쪽으로 execute)
- 확인 사항
  - [x] 체크일 시 on check 메세지를 보이게함
  - [x] checkmate 를 당했을 시 게임이 종료 되고 board 는 확인 가능 하지만 클릭 불가능
  - [x] RESTART 를 눌러 게임을 초기화 시키고 다시 play 가능

### Resources

- [Chess Piece Images](https://commons.wikimedia.org/wiki/Category:PNG_chess_pieces/Standard_transparent)
