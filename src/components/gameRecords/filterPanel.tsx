import { useCallback } from "react";
import React from "react";

import { FormRow, DatePicker } from "../form";
import { useModel } from "./model";
import dayjs from "dayjs";
import { ModeSelector } from "./modeSelector";
import Conf from "../../utils/conf";

const DEFAULT_DATE = dayjs().startOf("day");

export function FilterPanel() {
  const [model, updateModel] = useModel();
  const setMode = useCallback((mode: string) => updateModel({ selectedMode: mode }), [updateModel]);
  const setDate = useCallback((date: dayjs.ConfigType) => updateModel({ date }), [updateModel]);
  if (model.type !== undefined) {
    return null;
  }
  return (
    <>
      <FormRow title="日期">
        <DatePicker min={Conf.dateMin} date={model.date || DEFAULT_DATE} onChange={setDate} className="form-control" />
      </FormRow>
      {Conf.availableModes.length > 1 && (
        <FormRow>
          <ModeSelector mode={model.selectedMode} onChange={setMode} />
        </FormRow>
      )}
    </>
  );
}
