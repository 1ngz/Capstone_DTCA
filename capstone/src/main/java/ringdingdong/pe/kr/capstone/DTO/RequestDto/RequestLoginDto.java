package ringdingdong.pe.kr.capstone.DTO.RequestDto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class RequestLoginDto {

    private String loginId;
    private String password;

    @Builder
    public RequestLoginDto(String loginId, String password) {
        this.loginId = loginId;
        this.password = password;
    }
}
