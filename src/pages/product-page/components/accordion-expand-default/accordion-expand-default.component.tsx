import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FC, useState } from "react";
import { AccordionExpandDefaultProps } from "./accordion-expand-default.types";
import { useTheme } from "@mui/material/styles";

const AccordionExpandDefault: FC<AccordionExpandDefaultProps> = () => {
  const theme = useTheme(); // Получите текущую тему
  const [expandedIndex, setExpandedIndex] = useState<number | false>(0); // Изначально открываем первый аккордеон

  const handleChange = (index: number) => {
    // Устанавливаем индекс аккордеона, который будет открыт
    setExpandedIndex(expandedIndex === index ? false : index);
  };

  return (
    <div>
      <Accordion
        expanded={expandedIndex === 0} // Проверяем, открыт ли первый аккордеон
        onChange={() => handleChange(0)}
      >
        <AccordionSummary
          expandIcon={
            <AddCircleIcon
              style={{
                color:
                  expandedIndex === 0
                    ? theme.palette.action.active
                    : theme.palette.action.disabled,
              }}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header-0"
        >
          <Typography>Composition</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>- Cotton 80%</Typography>
          <Typography>- Polyester 20%</Typography>
          <Typography>- Elastic rib</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedIndex === 1} // Проверяем, открыт ли второй аккордеон
        onChange={() => handleChange(1)}
      >
        <AccordionSummary
          expandIcon={
            <AddCircleIcon
              style={{
                color:
                  expandedIndex === 1
                    ? theme.palette.action.active
                    : theme.palette.action.disabled,
              }}
            />
          }
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Shipping options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>blablablablablablablablablabla</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedIndex === 2} // Проверяем, открыт ли третий аккордеон
        onChange={() => handleChange(2)}
      >
        <AccordionSummary
          expandIcon={
            <AddCircleIcon
              style={{
                color:
                  expandedIndex === 2
                    ? theme.palette.action.active
                    : theme.palette.action.disabled,
              }}
            />
          }
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Find in local stores</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>blablablablablablablablablabla</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionExpandDefault;
