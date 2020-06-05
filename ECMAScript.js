// 参考ECMAScript-262 第9版
Grammar Summary 文法摘要

1. Lexical Grammar 词法

SourceCharacter::
any Unicode code point

InputElementDiv::
WhiteSpace
LineTerminator
Comment
CommentToken
DivPunctuator
RightBracePunctuator

InputElementRegExp::
WhiteSpace
LineTerminator
Comment
CommentToken
RightBracePunctuator
RegularExpressionLiteral

InputElementRegExpOrTemplateTail::
WhiteSpace
LineTerminator
Comment
CommentToken
RegularExpressionLiteral
TemplateSubstitutionTail

InputElementTemplateTail::
WhiteSpace
LineTerminator
Comment
CommentToken
DivPunctuator
TemplateSubstitutionTail

WhiteSpace::
/*
<TAB>
<VT>
<FF>
<SP>
<NBSP>
<ZWNBSP>
<USP>
*/

LineTerminator::
/*
<LF>
<CR>
<LS>
<PS>
*/

LineTerminatorSequence::
/*
<LF>
<CR>[lookahead != <LF>]
<LS>
<PS>
<CR><LF>
*/

Comment::
MultiLineComment
SingleLineComment

MultiLineComment::
/* MultiLineCommentChars */

MultiLineCommentChars::
MultiLineNotAsteriskChar MultiLineCommentChars
  * PostAsteriskCommentChars

PostAsteriskCommentChars::
MultiLineNotForwardSlashOrAsteriskChar MultiLineCommentChars
  * PostAsteriskCommentChars

MultiLineNotAsteriskChar::
SourceCharacter but not *

  SingleLineComment::
// SingleLineCommentChars

SingleLineCommentChars::
SingleLineCommentChar SingleLineCommentChars

SingleLineCommentChar::
SourceCharacter but not LineTerminator