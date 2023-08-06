package com.db.grad.javaapi.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.TradeRepository;
import com.db.grad.javaapi.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.*;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private TradeRepository tradeRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testAddUser() {
        // Arrange
        User user = new User();
        user.setUserName("John Doe");

        when(userRepository.save(user)).thenReturn(user);

        // Act
        User savedUser = userService.addUser(user);

        // Assert
        assertEquals(user, savedUser);
        verify(userRepository, times(1)).save(user);
    }

    @Test
    void testGetUserById() {
        // Arrange
        User user = new User();
        user.setUserName("John Doe");
        when(userRepository.findById(1)).thenReturn(Optional.of(user));

        // Act
        User retrievedUser = userService.getUserById(1);

        // Assert
        assertEquals(user, retrievedUser);
        verify(userRepository, times(1)).findById(1);
    }

    @Test
    void testGetAllUsers() {
        // Arrange
        User user1 = new User();
        User user2 = new User();
        user1.setUserName("John Doe");
        user2.setUserName("Jane Smith");
        List<User> users = Arrays.asList(user1, user2);
        when(userRepository.findAll()).thenReturn(users);

        // Act
        List<User> allUsers = userService.getAllUsers();

        // Assert
        assertEquals(users.size(), allUsers.size());
        assertTrue(allUsers.containsAll(users));
        verify(userRepository, times(1)).findAll();
    }

    @Test
    void testDeleteUserById() {
        // Arrange
        User user = new User();
        user.setUserName("John Doe");
        when(userRepository.findById(1)).thenReturn(Optional.of(user));

        // Act
        boolean isDeleted = userService.deleteUserById(1);

        // Assert
        assertTrue(isDeleted);
        verify(userRepository, times(1)).delete(user);
    }

    @Test
    void testGetBookForUser() {
        // Arrange
        int userId = 1;
        User user = new User();
        user.setUserName("John Doe");
        Book book1 = new Book();
        Book book2 = new Book();
        book1.setBookName("Book 1");
        book2.setBookName("Book 2");
        Set<Book> books = new HashSet<>(Arrays.asList(book1, book2));
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(userRepository.findBooksByUserId(userId)).thenReturn(books);

        // Act
        Set<Book> booksForUser = userService.getBookForUser(userId);

        // Assert
        assertEquals(books, booksForUser);
        verify(userRepository, times(1)).findById(userId);
        verify(userRepository, times(1)).findBooksByUserId(userId);
    }

    @Test
    void testGetTradesForUser() {
        // Arrange
        int userId = 1;

        User user = new User();
        user.setUserName("John Doe");

        Book book1 = new Book();
        book1.setBookName("Book 1");

        Set<Book> booksForUser = new HashSet<>(Collections.singletonList(book1));

        Trade trade1 = new Trade();
        trade1.setBook(book1);

        Bond bond1 = new Bond();
        trade1.setBond(bond1);

        Trade trade2 = new Trade();
        Book book2 = new Book();
        trade2.setBook(book2);

        Bond bond2 = new Bond();
        trade2.setBond(bond2);

        Set<Trade> allTrades = new HashSet<>(Arrays.asList(trade1, trade2));

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(userRepository.findBooksByUserId(userId)).thenReturn(booksForUser);
        when(tradeRepository.findAll()).thenReturn(new ArrayList<>(allTrades));

        // Act
        Set<Trade> tradesForUser = userService.getTradesForUser(userId);

        // Assert
        assertEquals(1, tradesForUser.size());
        assertTrue(tradesForUser.contains(trade1));
        verify(userRepository, times(1)).findById(userId);
        verify(userRepository, times(1)).findBooksByUserId(userId);
        verify(tradeRepository, times(1)).findAll();
    }



    @Test
    void testGetBondsForUser() {
        // Arrange
        int userId = 1;

        User user = new User();
        user.setUserName("John Doe");

        Book book1 = new Book();
        book1.setBookName("Book 1");
        Book book2 = new Book();

        Set<Book> booksForUser = new HashSet<>(Arrays.asList(book1, book2));

        Trade trade1 = new Trade();
        trade1.setBook(book1);
        Bond bond1 = new Bond();
        trade1.setBond(bond1);

        Trade trade2 = new Trade();
        trade2.setBook(book2);
        Bond bond2 = new Bond();
        trade2.setBond(bond2);

        Set<Trade> allTrades = new HashSet<>(Arrays.asList(trade1, trade2));

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(userRepository.findBooksByUserId(userId)).thenReturn(booksForUser);
        when(tradeRepository.findAll()).thenReturn(new ArrayList<>(allTrades));

        // Act
        Set<Bond> bonds = userService.getBondsForUser(userId);

        // Assert
        assertEquals(2, bonds.size());
        assertTrue(bonds.contains(bond1));
        assertTrue(bonds.contains(bond2));
        verify(userRepository, times(1)).findById(userId);
    }

}
