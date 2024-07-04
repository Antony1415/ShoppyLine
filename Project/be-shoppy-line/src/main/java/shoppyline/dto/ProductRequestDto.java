package shoppyline.dto;

import java.util.List;

import lombok.Data;

@Data
public class ProductRequestDto {
    private String name;
    private String description;
    private Double price;
    private List<String> images;
}
