package ringdingdong.pe.kr.capstone.DTO.RequestDto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class RequestDuplicateLoginIdDto {
    private String loginId;

    @Builder
    public RequestDuplicateLoginIdDto(String loginId) {
        this.loginId = loginId;
    }
}
