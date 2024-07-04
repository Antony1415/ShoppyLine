package shoppyline.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import shoppyline.dto.ProductImageDto;
import shoppyline.dto.ProductRequestDto;
import shoppyline.dto.ProductResponseDto;
import shoppyline.dto.ResponseData;
import shoppyline.model.Product;
import shoppyline.model.ProductImage;
import shoppyline.service.ProductImageService;
import shoppyline.service.ProductService;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/product")
@Slf4j
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductImageService productImageService;

    @GetMapping
    public ResponseEntity<ResponseData<List<Product>>> getAllProducts() {
        List<Product> products = productService.findAllProducts();
        ResponseData<List<Product>> response = new ResponseData<List<Product>>(HttpStatus.OK, null, products);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PostMapping
    public ResponseEntity<ResponseData<ProductResponseDto>> createProduct(@RequestBody ProductRequestDto request) {
        Product product = productService.createProduct(request);

        List<ProductImage> productImages = new ArrayList<>();
        for (String image : request.getImages()) {
            ProductImageDto productImageDto = new ProductImageDto(image, product.getId());
            ProductImage productImage = productImageService.saveProductImage(productImageDto);
            productImages.add(productImage);
        }

        ProductResponseDto productDto = new ProductResponseDto(product.getId(), product.getName(),
                product.getDescription(), product.getPrice(), productImages);

        ResponseData<ProductResponseDto> response = new ResponseData<>(HttpStatus.CREATED, productDto);
        response.getMessages().add("Success creat product.");
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseData<Product>> findByIdProdut(@PathVariable("id") String id) {
        try{
            Optional<Product> product = productService.findByIdProduct(Long.valueOf(id));
            ResponseData<Product> response = new ResponseData<>();
            
            if(product.isPresent()) {
                response.setPayload(product.get());
                response.setStatus(HttpStatus.OK);
                return ResponseEntity.status(response.getStatus()).body(response);
            }
            
            response.getMessages().add("Product not found.");
            response.setStatus(HttpStatus.BAD_REQUEST);
            return ResponseEntity.status(response.getStatus()).body(response);
        } catch( Exception err) {
            System.out.println(" ERROR");
            return ResponseEntity.status(0).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseData<Product>> updateProduct(@PathVariable("id") String id, @RequestBody ProductRequestDto request) {
        Optional<Product> product = productService.updateProduct(Long.valueOf(id), request);
        ResponseData<Product> response = new ResponseData<>();

        if(product.isEmpty()) {
            response.setStatus(HttpStatus.BAD_REQUEST);
            response.getMessages().add("Product not found.");
            return ResponseEntity.status(response.getStatus()).body(response);
        }

        response.getMessages().add("Success update product.");
        response.setStatus(HttpStatus.OK);
        return ResponseEntity.status(response.getStatus()).body(response);
    }
}
