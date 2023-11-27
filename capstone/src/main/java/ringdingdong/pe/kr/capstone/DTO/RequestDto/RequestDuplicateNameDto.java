package ringdingdong.pe.kr.capstone.DTO.RequestDto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class RequestDuplicateNameDto {

    private String name;

    @Builder
    public RequestDuplicateNameDto(String name) {
        this.name = name;
    }
}
