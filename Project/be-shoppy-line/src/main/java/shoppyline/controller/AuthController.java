package shoppyline.controller;

import org.springframework.web.bind.annotation.RestController;

import shoppyline.dto.LoginRequestDto;
import shoppyline.dto.RegisterRequestDto;
import shoppyline.dto.ResponseData;
import shoppyline.model.User;
import shoppyline.service.UserService;

import java.util.ArrayList;

import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<ResponseData<User>> register(@RequestBody RegisterRequestDto request) {
        System.out.println("RREQRQE: " + request);
        ResponseData<User> response = new ResponseData<>();
        try {
            User user = userService.register(request);
            response.setStatus(HttpStatus.OK);
            response.setPayload(user);
            return ResponseEntity.status(response.getStatus()).body(response);
        } catch (Exception err) {
            response.setStatus(HttpStatus.BAD_REQUEST);
            response.getMessages().add(String.valueOf(err));
            response.setPayload(null);
            return ResponseEntity.status(response.getStatus()).body(response);
        }
    }
    
    @PostMapping("/login")
    public ResponseEntity<ResponseData<UserDetails>> login(@RequestBody LoginRequestDto request) {
        try {
            UserDetails user = userService.login(request);
            ResponseData<UserDetails> response = ResponseData.<UserDetails>builder()
                    .status(HttpStatus.OK)
                    .payload(user).build();
                    
            return ResponseEntity.status(response.getStatus()).body(response);
        } catch (Exception err) {
            System.out.println("ERR: " + err);
            ResponseData<UserDetails> response = ResponseData.<UserDetails>builder()
                    .status(HttpStatus.BAD_REQUEST)
                    .messages(new ArrayList<>())
                    .payload(null).build();
            response.getMessages().add(String.valueOf(err));

            return ResponseEntity.status(response.getStatus()).body(response);
        }
    }

}
