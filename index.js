document.addEventListener("DOMContentLoaded", () => {
  const flexGrowInput = document.getElementById("flexGrow");
  const flexGrowValue = document.getElementById("flexGrowValue");
  const flexGrowDisplay = document.getElementById("flexGrowDisplay");

  const flexShrinkInput = document.getElementById("flexShrink");
  const flexShrinkValue = document.getElementById("flexShrinkValue");
  const flexShrinkDisplay = document.getElementById("flexShrinkDisplay");

  const flexBasisInput = document.getElementById("flexBasis");
  const flexBasisValue = document.getElementById("flexBasisValue");
  const flexBasisDisplay = document.getElementById("flexBasisDisplay");

  const selectItem = document.getElementById("selectItem");

  const items = {
    all: document.querySelectorAll(".item"),
    item1: document.getElementById("item1"),
    item2: document.getElementById("item2"),
    item3: document.getElementById("item3"),
  };

  const resetButton = document.getElementById("resetButton");

  const updateFlexProperties = () => {
    const selectedItem = selectItem.value;

    const applyFlexProperties = (element) => {
      element.style.flexGrow = flexGrowInput.value;
      element.style.flexShrink = flexShrinkInput.value;
      element.style.flexBasis = `${flexBasisInput.value}px`;
    };

    if (selectedItem === "all") {
      items.all.forEach(applyFlexProperties);
    } else {
      applyFlexProperties(items[selectedItem]);
    }

    flexGrowDisplay.textContent = flexGrowInput.value;
    flexShrinkDisplay.textContent = flexShrinkInput.value;
    flexBasisDisplay.textContent = `${flexBasisInput.value}px`;
  };

  const syncInputs = (rangeInput, numberInput) => {
    numberInput.value = rangeInput.value;
  };

  flexGrowInput.addEventListener("input", () => {
    syncInputs(flexGrowInput, flexGrowValue);
    updateFlexProperties();
  });

  flexGrowValue.addEventListener("input", () => {
    flexGrowInput.value = flexGrowValue.value;
    updateFlexProperties();
  });

  flexShrinkInput.addEventListener("input", () => {
    syncInputs(flexShrinkInput, flexShrinkValue);
    updateFlexProperties();
  });

  flexShrinkValue.addEventListener("input", () => {
    flexShrinkInput.value = flexShrinkValue.value;
    updateFlexProperties();
  });

  flexBasisInput.addEventListener("input", () => {
    syncInputs(flexBasisInput, flexBasisValue);
    updateFlexProperties();
  });

  flexBasisValue.addEventListener("input", () => {
    flexBasisInput.value = flexBasisValue.value;
    updateFlexProperties();
  });

  selectItem.addEventListener("change", updateFlexProperties);

  resetButton.addEventListener("click", () => {
    flexGrowInput.value = 0;
    flexGrowValue.value = 0;
    flexShrinkInput.value = 1;
    flexShrinkValue.value = 1;
    flexBasisInput.value = 100;
    flexBasisValue.value = 100;
    updateFlexProperties();
  });

  // Initial update
  updateFlexProperties();
});
