package ringdingdong.pe.kr.capstone.Service;

import ringdingdong.pe.kr.capstone.DTO.RequestDto.RequestSaveCommentDto;
import ringdingdong.pe.kr.capstone.DTO.RequestDto.RequestUpdateCommentDto;

public interface CommentService {
    public void save(RequestSaveCommentDto requestSaveCommentDto);
    public void update(RequestUpdateCommentDto requestUpdateCommentDto);
    public void delete(Long commentId);
}
