package ringdingdong.pe.kr.capstone.Repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import ringdingdong.pe.kr.capstone.Entity.Board;
import ringdingdong.pe.kr.capstone.Entity.Member;

import java.util.List;
import java.util.Optional;

@SpringBootTest
@Transactional
public class MemberBoardTest {

    @Autowired
    MemberRepository memberRepository;
    @Autowired
    BoardRepository boardRepository;

    @Test
    void saveAndFind() {
        Member member = Member.builder().
                loginId("moda521").
                password("dbtjsdn5876@@").
                name("장영재").
                phoneNumber("01085066230").
                email("dbtjsdn980818@naver.com").
                build();
        Member savedMember = memberRepository.save(member);
        Board board = Board.builder().
                title("제목").
                contents("가나다라바마사").
                member(member).
                build();
        boardRepository.save(board);
        Board board1 = Board.builder().
                title("제목1").
                contents("abcdefg").
                member(member).
                build();
        boardRepository.save(board1);

        Optional<Member> findMember = memberRepository.findById(1L);
        System.out.println("findMember = " + findMember.toString());
    }
}
