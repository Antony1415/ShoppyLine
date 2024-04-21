package shoppyline.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shoppyline.dto.ProductImageDto;
import shoppyline.model.Product;
import shoppyline.model.ProductImage;
import shoppyline.repository.ProductImageRepository;
import shoppyline.repository.ProductRepository;

@Service
public class ProductImageService {
    @Autowired
    private ProductImageRepository productImageRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<ProductImage> findAllProductImages() {
        return productImageRepository.findAll();
    }

    public ProductImage saveProductImage(ProductImageDto request) {
        Product product = productRepository.findById(request.getProductId()).orElse(null);
        ProductImage newProductImage = new ProductImage(request.getImage(), product);
        return productImageRepository.save(newProductImage);
    }
}
