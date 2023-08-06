package com.db.grad.javaapi.service;

import com.db.grad.javaapi.model.Bond;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.repository.BondRepository;
import com.db.grad.javaapi.repository.TradeRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class BondServiceTest {

    @Mock
    private BondRepository bondRepository;

    @Mock
    private TradeRepository tradeRepository;

    @InjectMocks
    private BondService bondService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testAddBond() {
        // Arrange
        Bond bond = new Bond();
        bond.setBondId(1);

        when(bondRepository.save(bond)).thenReturn(bond);

        // Act
        Bond savedBond = bondService.addBond(bond);

        // Assert
        assertNotNull(savedBond);
        assertEquals(bond, savedBond);
        verify(bondRepository, times(1)).save(bond);
    }

    @Test
    void testGetBondById() {
        // Arrange
        int bondId = 1;
        Bond bond = new Bond();
        bond.setBondId(bondId);

        when(bondRepository.findById(bondId)).thenReturn(Optional.of(bond));

        // Act
        Bond retrievedBond = bondService.getBondById(bondId);

        // Assert
        assertNotNull(retrievedBond);
        assertEquals(bondId, retrievedBond.getBondId());
        assertEquals(bond, retrievedBond);
        verify(bondRepository, times(1)).findById(bondId);
    }

    @Test
    void testGetBondById_NotFound() {
        // Arrange
        int bondId = 2;

        when(bondRepository.findById(bondId)).thenReturn(Optional.empty());

        // Act
        Bond retrievedBond = bondService.getBondById(bondId);

        // Assert
        assertNull(retrievedBond);
        verify(bondRepository, times(1)).findById(bondId);
    }

    @Test
    void testGetAllBonds() {
        // Arrange
        List<Bond> bonds = Collections.singletonList(new Bond());

        when(bondRepository.findAll()).thenReturn(bonds);

        // Act
        List<Bond> allBonds = bondService.getAllBonds();

        // Assert
        assertEquals(1, allBonds.size());
        verify(bondRepository, times(1)).findAll();
    }

    @Test
    void testDeleteBondById() {
        // Arrange
        int bondId = 1;
        Bond bond = new Bond();
        bond.setBondId(bondId);

        when(bondRepository.findById(bondId)).thenReturn(Optional.of(bond));

        // Act
        boolean isDeleted = bondService.deleteBondById(bondId);

        // Assert
        assertTrue(isDeleted);
        verify(bondRepository, times(1)).findById(bondId);
        verify(bondRepository, times(1)).delete(bond);
    }

    @Test
    void testDeleteBondById_NotFound() {
        // Arrange
        int bondId = 2;

        when(bondRepository.findById(bondId)).thenReturn(Optional.empty());

        // Act
        boolean isDeleted = bondService.deleteBondById(bondId);

        // Assert
        assertFalse(isDeleted);
        verify(bondRepository, times(1)).findById(bondId);
        verify(bondRepository, never()).delete(any());
    }

    @Test
    void testGetTradesByBondId() {
        // Arrange
        int bondId = 3;
        Bond bond = new Bond();
        bond.setBondId(bondId);

        Trade trade1 = new Trade();
        trade1.setBond(bond);

        Trade trade2 = new Trade();
        Bond otherBond = new Bond();
        trade2.setBond(otherBond);

        List<Trade> allTrades = Arrays.asList(trade1, trade2);

        when(tradeRepository.findAll()).thenReturn(allTrades);

        // Act
        Set<Trade> tradesForBond = bondService.getTradesByBondId(bondId);

        // Assert
        assertNotNull(tradesForBond);
        assertEquals(1, tradesForBond.size());
        assertTrue(tradesForBond.contains(trade1));
        assertFalse(tradesForBond.contains(trade2));
        verify(tradeRepository, times(1)).findAll();
    }
}
