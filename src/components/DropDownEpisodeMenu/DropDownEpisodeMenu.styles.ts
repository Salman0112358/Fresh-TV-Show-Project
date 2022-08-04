import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: flex-start;
  max-width: var(--maxWidth);
  padding: 30px;
  margin: 0 auto;
`;

export const MenuDrop = styled.div`
  .dropdown {
    position: relative;
    display: inline-block;
    left: -50%;
    top: -20px;
  }

  .dropbtn {
    background-color: darkgreen;
    color: white;
    padding: 16px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    height: 55px;
    width: 300px;
    border-radius: 25px;
  }

  /* The container <div> - needed to position the dropdown content */
  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 300px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content li {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content li:hover {
    background-color: #f1f1f1;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
`;
