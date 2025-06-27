package com.mindnest.MentalHealth.repository;



import com.mindnest.MentalHealth.model.MoodEntry;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MoodEntryRepository extends JpaRepository<MoodEntry, Long> {
    List<MoodEntry> findAllByOrderByDateDesc();
}
