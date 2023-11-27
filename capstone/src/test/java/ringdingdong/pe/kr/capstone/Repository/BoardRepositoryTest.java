package ringdingdong.pe.kr.capstone.Repository;

import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import ringdingdong.pe.kr.capstone.Entity.Board;
import ringdingdong.pe.kr.capstone.Entity.Comment;
import ringdingdong.pe.kr.capstone.Entity.Member;

@SpringBootTest
public class BoardRepositoryTest {

    @Autowired
    BoardRepository boardRepository;
    @Autowired
    MemberRepository memberRepository;
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    EntityManager em;

    @Test
    public void test(){
        Member member = memberRepository.findById(9L).get();
        Board board = Board.builder().
                title("제목").
                contents("가나다라바마사").
                member(member).
                build();
        boardRepository.save(board);
        Comment comment1 = Comment.builder().
                contents("skskskskksks").
                member(member).
                board(board).
                build();
        commentRepository.save(comment1);
        Comment comment2 = Comment.builder().
                contents("sdsdsds").
                member(member).
                board(board).
                build();
        commentRepository.save(comment2);
    }
}
