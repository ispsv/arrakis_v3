package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UserControllerTest {

    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testLoginUser_ValidCredentials() {
        // Arrange
        User user = new User();
        List<User> allUsers = new ArrayList<>();
        allUsers.add(user);
        when(userService.getAllUsers()).thenReturn(allUsers);

        // Act
        ResponseEntity<User> response = userController.loginUser(user);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(user, response.getBody());
    }

    @Test
    void testLoginUser_InvalidCredentials() {
        // Arrange
        User user = new User();
        user.setUserName("Not existing username");
        user.setPassword("Not existing password");
        List<User> allUsers = new ArrayList<>();
        allUsers.add(new User());
        when(userService.getAllUsers()).thenReturn(allUsers);

        // Act
        ResponseEntity<User> response = userController.loginUser(user);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void testGetBooksForUser() {
        // Arrange
        int userId = 1;
        Set<Book> expectedBooks = new HashSet<>();
        expectedBooks.add(new Book());
        expectedBooks.add(new Book());
        when(userService.getBookForUser(userId)).thenReturn(expectedBooks);

        // Act
        Set<Book> actualBooks = userController.getBooksForUser(userId);

        // Assert
        assertEquals(expectedBooks, actualBooks);
    }

    @Test
    void testGetTradesForUser() {
        // Arrange
        int userId = 1;
        Set<Trade> expectedTrades = new HashSet<>();
        expectedTrades.add(new Trade());
        expectedTrades.add(new Trade());
        when(userService.getTradesForUser(userId)).thenReturn(expectedTrades);

        // Act
        Set<Trade> actualTrades = userController.getTradesForUser(userId);

        // Assert
        assertEquals(expectedTrades, actualTrades);
    }

    @Test
    void testGetBondsForUser() {
        // Arrange
        int userId = 1;
        Set<Bond> expectedBonds = new HashSet<>();
        expectedBonds.add(new Bond());
        expectedBonds.add(new Bond());
        when(userService.getBondsForUser(userId)).thenReturn(expectedBonds);

        // Act
        Set<Bond> actualBonds = userController.getBondsForUser(userId);

        // Assert
        assertEquals(expectedBonds, actualBonds);
    }
}
