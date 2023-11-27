package ringdingdong.pe.kr.capstone.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@ResponseStatus(HttpStatus.OK)
@RestController
@RequestMapping(value = "/institution")
@RequiredArgsConstructor
public class UploadController {

    @PostMapping(value = "/upload")
    public String uploadFile() {

        return "ok";
    }
}
