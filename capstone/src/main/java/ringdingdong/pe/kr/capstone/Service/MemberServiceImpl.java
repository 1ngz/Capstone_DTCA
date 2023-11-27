package ringdingdong.pe.kr.capstone.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ringdingdong.pe.kr.capstone.DTO.ResponseDto.ResponseMemberBoardDto;
import ringdingdong.pe.kr.capstone.DTO.ResponseDto.ResponseMemberCommentDto;
import ringdingdong.pe.kr.capstone.DTO.ResponseDto.ResponseMemberInfoDto;
import ringdingdong.pe.kr.capstone.Entity.Member;
import ringdingdong.pe.kr.capstone.Repository.BoardRepository;
import ringdingdong.pe.kr.capstone.Repository.CommentRepository;
import ringdingdong.pe.kr.capstone.Repository.MemberRepository;

import java.util.List;
import java.util.stream.Collectors;


@Service
@Transactional
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;
    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;

    @Override
    public ResponseMemberInfoDto findMemberInfo(Authentication authentication) {
        Member member = memberRepository.findByLoginId(authentication.getName()).get();
        List<ResponseMemberBoardDto> boards = boardRepository.findByMember(member)
                .stream()
                .map(b -> ResponseMemberBoardDto.builder()
                        .id(b.getId())
                        .title(b.getTitle())
                        .contents(b.getContents())
                        .modifiedTime(b.getModifiedTime())
                        .build()
                ).collect(Collectors.toList());
        List<ResponseMemberCommentDto> comments = commentRepository.findByMember(member)
                .stream()
                .map(c->ResponseMemberCommentDto.builder()
                        .id(c.getId())
                        .contents(c.getContents())
                        .modifiedTime(c.getModifiedTime())
                        .build())
                .collect(Collectors.toList());
        ResponseMemberInfoDto responseMemberInfoDto = ResponseMemberInfoDto.builder()
                .name(member.getName())
                .loginId(member.getLoginId())
                .phoneNumber(member.getPhoneNumber())
                .email(member.getEmail())
                .institutionCEO(member.getInstitutionCEO())
                .institutionName(member.getInstitutionName())
                .registrationNumber(member.getRegistrationNumber())
                .role(member.getRole())
                .boards(boards)
                .comments(comments)
                .build();
        return responseMemberInfoDto;
    }
}
