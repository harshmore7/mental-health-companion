package com.mindnest.MentalHealth.controller;

import com.mindnest.MentalHealth.model.MoodEntry;
import com.mindnest.MentalHealth.repository.MoodEntryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mood")
@CrossOrigin(origins = "*") // Allow frontend to call this API
public class MoodEntryController {

    private final MoodEntryRepository repository;

    public MoodEntryController(MoodEntryRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<MoodEntry> getAll() {
        return repository.findAllByOrderByDateDesc();
    }

    @PostMapping
    public MoodEntry save(@RequestBody MoodEntry entry) {
        return repository.save(entry);
    }
}