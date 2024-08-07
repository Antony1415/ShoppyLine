package shoppyline.dto;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResponseData<T> {
    private HttpStatus status;
    private List<String> messages = new ArrayList<>();
    private T payload;

    public ResponseData(HttpStatus status, T payload) {
        this.status = status;
        this.payload = payload;
    }
}
