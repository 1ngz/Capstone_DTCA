package ringdingdong.pe.kr.capstone.Service;

import org.springframework.security.core.Authentication;
import ringdingdong.pe.kr.capstone.DTO.ResponseDto.ResponseMemberInfoDto;

public interface MemberService {
    ResponseMemberInfoDto findMemberInfo(Authentication authentication);
}
