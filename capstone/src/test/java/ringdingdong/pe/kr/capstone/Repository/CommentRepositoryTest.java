package ringdingdong.pe.kr.capstone.Repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import ringdingdong.pe.kr.capstone.Entity.Board;
import ringdingdong.pe.kr.capstone.Entity.Comment;

@SpringBootTest
public class CommentRepositoryTest {

    @Autowired
    CommentRepository commentRepository;
    @Autowired
    BoardRepository boardRepository;

    @Test
    public void test(){
        Board board = boardRepository.findById(205L).get();
        Comment comment = Comment.builder().
                contents("나난나나나ㅏ난").
                member(board.getMember()).
                board(board).
                build();
        commentRepository.save(comment);
        Comment comment1 = Comment.builder().
                contents("skskskskksks").
                member(board.getMember()).
                board(board).
                build();
        commentRepository.save(comment1);
    }
}
