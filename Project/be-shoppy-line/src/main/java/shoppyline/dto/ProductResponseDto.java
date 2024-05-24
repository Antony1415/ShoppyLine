package shoppyline.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import shoppyline.model.ProductImage;

@Data
@AllArgsConstructor
public class ProductResponseDto {
    private Long id;
    private String name;
    private String description;
    private Double price;
    private List<ProductImage> productImages;
}
