package ringdingdong.pe.kr.capstone.Service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import ringdingdong.pe.kr.capstone.DTO.RequestDto.RequestSaveBoardDto;
import ringdingdong.pe.kr.capstone.DTO.RequestDto.RequestUpdateBoardDto;
import ringdingdong.pe.kr.capstone.DTO.ResponseDto.ResponseBoardDto;
import ringdingdong.pe.kr.capstone.DTO.ResponseDto.ResponseBoardPageDto;

public interface BoardService {
    public Page<ResponseBoardPageDto> findBoardPage(Pageable pageable);
    public ResponseBoardDto findById(Long boardId);
    public void save(RequestSaveBoardDto requestSaveBoardDto);
    public void update(RequestUpdateBoardDto requestUpdateBoardDto);
    public void delete(Long boardId);
}
