package ringdingdong.pe.kr.capstone.Repository;

import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import ringdingdong.pe.kr.capstone.Entity.Board;
import ringdingdong.pe.kr.capstone.Entity.Member;
import ringdingdong.pe.kr.capstone.Entity.Role;

import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
public class MemberRepositoryTest {

    @Autowired
    MemberRepository memberRepository;
    @Autowired
    BoardRepository boardRepository;
    @Autowired
    BCryptPasswordEncoder encoder;
    @Autowired
    EntityManager em;

    @Test
    void saveMember() {
        Member member = Member.builder().
                loginId("ygy621").
                password(encoder.encode("ygy621")).
                name("유가영").
                phoneNumber("01085166230").
                email("ygy621@naver.com").
                institutionCEO("유가영").
                institutionName("세종대").
                registrationNumber("01298392839").
                role(Role.INSTITUTION).
                build();
        memberRepository.save(member);
    }
}
