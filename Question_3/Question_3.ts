//On the React side, StepperwithTitle.stories could be used with the map function. compose it into one function and deliver the map

    <Grid item xs>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="ui-input-form_TradeInAppraisalStepper-first-name"
                    fullWidth
                    label="First Name"
                    placeholder="Enter First Name"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="ui-input-form_TradeInAppraisalStepper-last-name"
                    fullWidth
                    label="Last Name"
                    placeholder="Enter Last Name"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="ui-input-form_TradeInAppraisalStepper-email"
                    fullWidth
                    label="Email"
                    placeholder="example@email.com"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="ui-input-form_TradeInAppraisalStepper-phone"
                    fullWidth
                    label="Phone"
                    placeholder="+1 234--567--8910"
                />
            </Grid>
        </Grid>
    </Grid>

//In nest js, packages/yd-backend/src/makes/makes.service.ts

    async updateMake(make: InputMake) {
        if (!make.id) {
            throw new NotFoundException("Make id required for update");
        }
        const original = await this.makeRepository.findOne({
            where: { id: make.id },
        });

        if (!original) {
            throw new NotFoundException("Make not found.");
        }

        const newlyApproved =
            make.adApproved === true && !original.approvedForAds;

        const updated = await original.update({
            ...make,
            name: make.name,
            description: make.description,
            approvedForAds: make.adApproved || original.approvedForAds,
        });

        if (newlyApproved) {
            this.eventEmitter.emit(Events["ad-spaces.new-make-model"], {
                entityId: original.id,
                type: "make",
            });
        }

        return createGqlMakeFromEntity(updated);
    }

