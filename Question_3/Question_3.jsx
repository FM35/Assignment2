"use strict";
// import { Grid, TextField } from "../node_modules/@mui/material/index";
// //On the React side, StepperwithTitle.stories in ha-ui could be refactored in the following way by creating a new JSX element
// const CustomTextField = ({
//   id,
//   label,
//   placeholder,
// }: {
//   readonly id: string;
//   readonly label: string;
//   readonly placeholder: string;
// }) => (
//   <Grid item xs={12}>
//     <TextField id={id} fullWidth label={label} placeholder={placeholder} />
//   </Grid>
// );
// const ExampleForReactJSRefactor = () => {
//   <Grid container spacing={2}>
//     <CustomTextField
//       id={"ui-input-form_TradeInAppraisalStepper-first-name"}
//       label={"First Name"}
//       placeholder={"Enter First Name"}
//     />
//     <CustomTextField
//       id={"ui-input-form_TradeInAppraisalStepper-last-name"}
//       label={"Last Name"}
//       placeholder={"Enter Last Name"}
//     />
//     <CustomTextField
//       id={"ui-input-form_TradeInAppraisalStepper-email"}
//       label={"Email"}
//       placeholder={"example@email.com"}
//     />
//     <CustomTextField
//       id={"ui-input-form_TradeInAppraisalStepper-phone"}
//       label={"Phone"}
//       placeholder={"+1 234--567--8910"}
//     />
//   </Grid>;
// };
// //In nest js, packages/yd-backend/src/makes/makes.service.ts. I used pipe to make the function more intuitive
// import { pipe } from "fp-ts/function";
// async function updateMake(make: InputMake) {
//   if (!make.id) {
//     throw new NotFoundException("Make id required for update");
//   }
//   const original = pipe(
//     await this.makeRepository.findOne({
//       where: { id: make.id },
//     }),
//     (data) => {
//       if (!data) {
//         throw new NotFoundException("Make not found.");
//       }
//       return data;
//     },
//     async (original) =>
//       await original.update({
//         ...make,
//         name: make.name,
//         description: make.description,
//         approvedForAds: make.adApproved || original.approvedForAds,
//       })
//   );
//   const newlyApproved = make.adApproved === true && !original.approvedForAds;
//   if (newlyApproved) {
//     this.eventEmitter.emit(Events["ad-spaces.new-make-model"], {
//       entityId: original.id,
//       type: "make",
//     });
//   }
//   return createGqlMakeFromEntity(updated);
// }
