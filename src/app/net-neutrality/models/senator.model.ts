export class SenatorModel {
    name: string;
    party: string;
    total: number;

    public constructor(init?: Partial<SenatorModel>) {
        Object.assign(this, init);
    }
  }
