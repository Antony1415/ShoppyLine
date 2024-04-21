package shoppyline.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ResponseData<T> {
    private HttpStatus status;
    private List<String> messages = new ArrayList<>();
    private T payload;
}
