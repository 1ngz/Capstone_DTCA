package ringdingdong.pe.kr.capstone.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ringdingdong.pe.kr.capstone.DTO.RequestDto.RequestSaveCommentDto;
import ringdingdong.pe.kr.capstone.DTO.RequestDto.RequestUpdateCommentDto;
import ringdingdong.pe.kr.capstone.Entity.Member;
import ringdingdong.pe.kr.capstone.Repository.MemberRepository;
import ringdingdong.pe.kr.capstone.Service.CommentServiceImpl;

import java.util.Optional;

@ResponseStatus(HttpStatus.OK)
@RequestMapping("/comment")
@RestController
@RequiredArgsConstructor
public class CommentController {

    private final CommentServiceImpl commentServiceImpl;
    private final MemberRepository memberRepository;

    @PostMapping
    public void saveComment(@RequestBody RequestSaveCommentDto requestSaveCommentDto, Authentication authentication) {
        Optional<Member> member = memberRepository.findByLoginId(authentication.getName());
        requestSaveCommentDto.setWriter(member.get().getName());
        commentServiceImpl.save(requestSaveCommentDto);
    }

    @PatchMapping
    public void updateComment(@RequestBody RequestUpdateCommentDto requestUpdateCommentDto, Authentication authentication) {
        Optional<Member> member = memberRepository.findByLoginId(authentication.getName());
        requestUpdateCommentDto.setWriter(member.get().getName());
        commentServiceImpl.update(requestUpdateCommentDto);
    }

    @DeleteMapping(value = "/{commentId}")
    public void deleteComment(@PathVariable Long commentId) {
        commentServiceImpl.delete(commentId);
    }
}
