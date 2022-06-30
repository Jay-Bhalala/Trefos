import React, { useState } from 'react';
import './css-files/discover.css';
import { useEffect, useRef, useState } from "react";

function filter() {
    const [selectedSkill, setSelectedSkill] = useState("");
    const [dropdownSearchValue, setDropdownSearchValue] = useState("");
    const [editMode, setEditMode] = useState(false);
    const dropdownRef = useRef();
  
    
  
    useEffect(() => {
      const checkIfClickedOutside = (e) => {
        // If the menu is open and the clicked target is not within the menu,
        // then close the menu
        if (
          editMode &&
          dropdownRef.current &&
          !dropdownRef.current.contains(e.target)
        ) {
          setEditMode(false);
        }
      };
      document.addEventListener("mousedown", checkIfClickedOutside);
      return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside);
      };
    }, [editMode]);
  
    const skillSelectionHandler = (skill) => {
      setSelectedSkill(skill);
      setDropdownSearchValue("");
      setEditMode(false);
    };
  
    const filteredSkills = skills.filter((skill) =>
      skill.match(new RegExp(dropdownSearchValue, "i"))
    );
  
    return (
      <div className="App">
        
        
        
        <h2>Dropdown filtering</h2>
  
        {editMode ? (
          <div ref={dropdownRef} className="dropdown-wrapper">
            <input
              className="dropdown-input"
              name="dropdown-input"
              autoFocus
              onChange={(e) => setDropdownSearchValue(e.target.value)}
              value={dropdownSearchValue}
            />
            <div className="dropdown-list">
              <ul>
                {filteredSkills.map((skill) => {
                  return (
                    <li key={skill} onClick={() => skillSelectionHandler(skill)}>
                      {skill}{" "}
                    </li>
                  );
                })}
                {filteredSkills.length === 0 && (
                  <li className="no-result">No results found</li>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <input
            className={`dropdown-search ${
              !(dropdownSearchValue || selectedSkill) && "default"
            }`}
            onClick={() => setEditMode(true)}
            onFocus={() => setEditMode(true)}
            value={selectedSkill || "Select Primary skill"}
          />
        )}
      </div>
    );
  }
  
  export default filter;