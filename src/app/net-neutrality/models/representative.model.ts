export class RepresentativeModel {
    name: string;
    party: string;
    district: string;
    total: number;

    public constructor(init?: Partial<RepresentativeModel>) {
        Object.assign(this, init);
    }
  }
