package ringdingdong.pe.kr.capstone.Service;

import ringdingdong.pe.kr.capstone.DTO.RequestDto.*;
import ringdingdong.pe.kr.capstone.Entity.Member;

import java.util.Optional;

public interface JoinService {
    void joinMember(RequestJoinMemberDto requestJoinMemberDto);
    Optional<Member> checkDuplicateLoginId(RequestDuplicateLoginIdDto requestDuplicateLoginIdDto);
    Optional<Member>  checkDuplicateEmail(RequestDuplicateEmailDto requestDuplicateEmailDto);
    Optional<Member> checkDuplicateName(RequestDuplicateNameDto requestDuplicateNameDto);
    Optional<Member>  findLoginId(RequestFindLoginIdDto requestFindLoginIdDto);
    Optional<Member>  findPassword(RequestFindPasswordDto requestFindPasswordDto);
    void joinInstitution(RequestJoinInstitutionDto requestJoinInstitutionDto);
}
