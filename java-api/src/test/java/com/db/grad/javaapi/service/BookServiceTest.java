package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Book;
import com.db.grad.javaapi.model.User;
import com.db.grad.javaapi.repository.BookRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class BookServiceTest {

    @Mock
    private BookRepository bookRepository;

    @InjectMocks
    private BookService bookService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetBookById() {
        // Arrange
        int bookId = 1;
        Book book = new Book();
        book.setBookId(bookId);
        book.setBookName("Book 1");

        when(bookRepository.findById(bookId)).thenReturn(Optional.of(book));

        // Act
        Book retrievedBook = bookService.getBookById(bookId);

        // Assert
        assertNotNull(retrievedBook);
        assertEquals(bookId, retrievedBook.getBookId());
        assertEquals("Book 1", retrievedBook.getBookName());
        verify(bookRepository, times(1)).findById(bookId);
    }

    @Test
    void testGetBookById_NotFound() {
        // Arrange
        int bookId = 2;

        when(bookRepository.findById(bookId)).thenReturn(Optional.empty());

        // Act
        Book retrievedBook = bookService.getBookById(bookId);

        // Assert
        assertNull(retrievedBook);
        verify(bookRepository, times(1)).findById(bookId);
    }

    @Test
    void testGetAllBooks() {
        // Arrange
        List<Book> books = Collections.singletonList(new Book());

        when(bookRepository.findAll()).thenReturn(books);

        // Act
        List<Book> allBooks = bookService.getAllBooks();

        // Assert
        assertEquals(1, allBooks.size());
        verify(bookRepository, times(1)).findAll();
    }

    @Test
    void testGetBookForUser() {
        // Arrange
        int bookId = 3;
        Book book = new Book();
        book.setBookId(bookId);
        book.setBookName("Book 3");

        User user1 = new User();
        User user2 = new User();

        Set<User> users = new HashSet<>(Arrays.asList(user1, user2));
        book.setUsers(users);

        when(bookRepository.findById(bookId)).thenReturn(Optional.of(book));
        when(bookRepository.findUsersByBookId(bookId)).thenReturn(book.getUsers());

        // Act
        Set<User> usersForBook = bookService.getBookForUser(bookId);

        // Assert
        assertNotNull(usersForBook);
        assertEquals(2, usersForBook.size());
        assertTrue(usersForBook.contains(user1));
        assertTrue(usersForBook.contains(user2));
        verify(bookRepository, times(1)).findById(bookId);
        verify(bookRepository, times(1)).findUsersByBookId(bookId);
    }

    @Test
    void testGetBookForUser_NotFound() {
        // Arrange
        int bookId = 4;

        when(bookRepository.findById(bookId)).thenReturn(Optional.empty());

        // Act
        Set<User> usersForBook = bookService.getBookForUser(bookId);

        // Assert
        assertNull(usersForBook);
        verify(bookRepository, times(1)).findById(bookId);
    }
}
