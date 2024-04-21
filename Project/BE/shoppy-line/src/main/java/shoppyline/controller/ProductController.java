package shoppyline.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import shoppyline.dto.ProductImageDto;
import shoppyline.dto.ProductRequestDto;
import shoppyline.dto.ProductResponseDto;
import shoppyline.dto.ResponseData;
import shoppyline.model.Product;
import shoppyline.model.ProductImage;
import shoppyline.service.ProductImageService;
import shoppyline.service.ProductService;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductImageService productImageService;

    @GetMapping()
    public ResponseEntity<ResponseData<List<Product>>> getAllProducts() {
        List<Product> products = productService.findAllProducts();
        ResponseData<List<Product>> response = new ResponseData<List<Product>>(HttpStatus.OK, null, products);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PostMapping()
    public ResponseEntity<ResponseData<ProductResponseDto>> createProduct(@RequestBody ProductRequestDto request) {
        Product product = productService.saveProduct(request);

        List<ProductImage> productImages = new ArrayList<>();
        for(String image: request.getImages()) {
            ProductImageDto productImageDto = new ProductImageDto(image, product.getId());
            ProductImage productImage = productImageService.saveProductImage(productImageDto);
            productImages.add(productImage);
        }

        ProductResponseDto productDto = new ProductResponseDto(product.getId(), product.getName(), product.getDescription(), product.getPrice(), productImages);
        ResponseData<ProductResponseDto> response = new ResponseData<>(HttpStatus.CREATED, null, productDto);
        return ResponseEntity.status(response.getStatus()).body(response);
    }
}
