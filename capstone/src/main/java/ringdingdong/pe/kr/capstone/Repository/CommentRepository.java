package ringdingdong.pe.kr.capstone.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ringdingdong.pe.kr.capstone.Entity.Board;
import ringdingdong.pe.kr.capstone.Entity.Comment;
import ringdingdong.pe.kr.capstone.Entity.Member;

import java.util.List;


@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByMember(Member member);
}
