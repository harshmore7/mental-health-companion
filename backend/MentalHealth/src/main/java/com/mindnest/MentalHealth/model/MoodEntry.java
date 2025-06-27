package com.mindnest.MentalHealth.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MoodEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String mood; // 😊 😐 😢
    private String note;
    private LocalDate date = LocalDate.now();
}
