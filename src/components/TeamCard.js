.heading {
  margin-top: 0px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 40px;
  font-weight: 400;
}

.column,
.column-right {
  padding-top: 20px;
  padding-bottom: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.row {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #d3d3d3;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  font-family: 'Courier New', Courier, monospace;
}

.imgbox,
.imgbox-right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: 300px;
  overflow: hidden;
}

.drone-home {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.textbox {
  margin: 0px 20px; 
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
    text-align: center;
  }
  .column,
  .imgbox,
  .imgbox-right {
    width: 100%;
  }
}
