export const BOARD_LENGTH = 8;

export const PAWN_DIRECTION_MAX = 4;
export const ROOK_DIRECTION_MAX = 4;
export const KNIGHT_DIRECTION_MAX = 8;
export const BISHOP_DIRECTION_MAX = 4;
export const QUEEN_DIRECTION_MAX = 8;
export const KING_DIRECTION_MAX = 8;

export const WHITE_PAWN_MOVE_RANGE_DY = [-2, -1, -1, -1];
export const WHITE_PAWN_MOVE_RANGE_DX = [0, -1, 1, 0];

export const BLACK_PAWN_MOVE_RANGE_DY = [2, 1, 1, 1];
export const BLACK_PAWN_MOVE_RANGE_DX = [0, -1, 1, 0];

export const ROOK_MOVE_RANGE_DY = [-1, 0, 1, 0];
export const ROOK_MOVE_RANGE_DX = [0, 1, 0, -1];

export const BISHOP_MOVE_RANGE_DY = [-1, -1, 1, 1];
export const BISHOP_MOVE_RANGE_DX = [-1, 1, 1, -1];

export const KNIGHT_MOVE_RANGE_DY = [-2, -2, -1, 1, 2, 2, 1, -1];
export const KNIGHT_MOVE_RANGE_DX = [-1, 1, 2, 2, 1, -1, -2, -2];

export const QUEEN_MOVE_RANGE_DY = [-1, 0, 1, 0, -1, -1, 1, 1];
export const QUEEN_MOVE_RANGE_DX = [0, 1, 0, -1, -1, 1, 1, -1];

export const KING_MOVE_RANGE_DY = [-1, 0, 1, 0, -1, -1, 1, 1];
export const KING_MOVE_RANGE_DX = [0, 1, 0, -1, -1, 1, 1, -1];

export const PAWN_PROMOTION_LIST = ["Queen", "Bishop", "Knight", "Rook"];

export const WHITE_KING_ID = "wk0";
export const WHITE_QUEEN_ID = "wq1";
export const WHITE_BISHOP1_ID = "wb1";
export const WHITE_BISHOP2_ID = "wb2";
export const WHITE_KNIGHT1_ID = "wn1";
export const WHITE_KNIGHT2_ID = "wn2";
export const WHITE_ROOK1_ID = "wr1";
export const WHITE_ROOK2_ID = "wr2";

export const WHITE_PAWN1_ID = "wp1";
export const WHITE_PAWN2_ID = "wp2";
export const WHITE_PAWN3_ID = "wp3";
export const WHITE_PAWN4_ID = "wp4";
export const WHITE_PAWN5_ID = "wp5";
export const WHITE_PAWN6_ID = "wp6";
export const WHITE_PAWN7_ID = "wp7";
export const WHITE_PAWN8_ID = "wp8";

export const BLACK_KING_ID = "bk0";
export const BLACK_QUEEN_ID = "bq1";
export const BLACK_BISHOP1_ID = "bb1";
export const BLACK_BISHOP2_ID = "bb2";
export const BLACK_KNIGHT1_ID = "bn1";
export const BLACK_KNIGHT2_ID = "bn2";
export const BLACK_ROOK1_ID = "br1";
export const BLACK_ROOK2_ID = "br2";

export const BLACK_PAWN1_ID = "bp1";
export const BLACK_PAWN2_ID = "bp2";
export const BLACK_PAWN3_ID = "bp3";
export const BLACK_PAWN4_ID = "bp4";
export const BLACK_PAWN5_ID = "bp5";
export const BLACK_PAWN6_ID = "bp6";
export const BLACK_PAWN7_ID = "bp7";
export const BLACK_PAWN8_ID = "bp8";

export const PAWN_PROMOTION_MESSAGE =
  "Promote your Pawn to ->\n1. Queen\n2. Bishop\n3. Knight\n4. Rook";
