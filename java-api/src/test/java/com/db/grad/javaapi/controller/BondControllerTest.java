package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.service.BondService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class BondControllerTest {

    @Mock
    private BondService bondService;

    @InjectMocks
    private BondController bondController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllBonds() {
        // Arrange
        List<Bond> expectedBonds = new ArrayList<>();
        expectedBonds.add(new Bond());
        expectedBonds.add(new Bond());
        when(bondService.getAllBonds()).thenReturn(expectedBonds);

        // Act
        List<Bond> actualBonds = bondController.getAllBonds();

        // Assert
        assertEquals(expectedBonds, actualBonds);
    }

    @Test
    void testGetBond_ValidId() {
        // Arrange
        int bondId = 1;
        Bond expectedBond = new Bond();
        when(bondService.getBondById(bondId)).thenReturn(expectedBond);

        // Act
        ResponseEntity<Bond> response = bondController.getBond(bondId);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedBond, response.getBody());
    }


    @Test
    void testCreateBond() {
        // Arrange
        Bond newBond = new Bond();
        when(bondService.addBond(newBond)).thenReturn(newBond);

        // Act
        Bond createdBond = bondController.createBond(newBond);

        // Assert
        assertEquals(newBond, createdBond);
    }

    @Test
    void testGetTradesForBond() {
        // Arrange
        int bondId = 1;
        Set<Trade> expectedTrades = new HashSet<>();
        expectedTrades.add(new Trade());
        expectedTrades.add(new Trade());
        when(bondService.getTradesByBondId(bondId)).thenReturn(expectedTrades);

        // Act
        Set<Trade> actualTrades = bondController.getTradesForBond(bondId);

        // Assert
        assertEquals(expectedTrades, actualTrades);
    }
}
