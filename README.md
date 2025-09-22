# VeChain Stargate Validator-Hub - Submit Form

The following is a set of guidelines for contributing to **Validator-Hub**. These
are just guidelines, not rules. Use your best judgment and feel free to propose changes to this document in a pull request.

> This hub lets queued or active Stargate validators publish their details and logo so they appear on Stargate.

## Rules

1. The validator must be queued or active on Stargate Mainnet
2. Logo is required
3. The directory name under `/validators` must be the validator's master address
4. Short and simple descriptions
5. Comply with directory & contents rules
6. One validator per submission

> This is only for validators currently queued or active on Stargate. If you are not yet registered as a validator, go to https://app.stargate.vechain.org/new-validator.

## Adding your validator

To add your validator, create your validator details and make a pull request for the maintainers to review and merge into Validator-Hub.

Recommended workflow:

- Fork the Validator-Hub
- Create a new branch
- Create your validator details and upload to the proper directory
- Make the pull request

Ref:

- [Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [Clone a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository)
- [Creating a new branch](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch)
- [Create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- [Tutorial: How to make your first pull request on Github by _Thanoshan MV_](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/)

### Create a directory

Once the Validator-Hub is forked, create a new directory in the `validators` directory named exactly as your validator's master address and include a `manifest.json` file and `logo.png` file. Your validator directory structure should look like this

```
├── validators
│   └── 0xYourMasterAddressHere
│       ├── logo.png
│       └── manifest.json
```

### Create a JSON File & Rules

Create a `manifest.json` file including validator details.

```
// manifest.json
{
    "name": "Your Validator Name",
    "location": "City, Country",
    "desc": "Short description of your validator (mission, operations, etc.)",
    "website": "https://your-validator-website.example"
}
```

- `name` is **required**.
- `location` is **required**. Use a clear geographical label such as `City, Country` or `Region, Country`.
- `desc` is **required**.
- `website` is _optional_, and must be a fully-qualified URL if provided.
- No fields should be left blank.

### Import the Logo & Rules

Import your validator logo into the directory and name it `logo`.

> A logo is a symbol made up of text and images that identifies your validator.

- Must be a `.png`
- Must be `512px by 512px`
- Must **not** be a copy of another company's or application's logo
- Must **not** contain any marketing information (including but not limited to social media links/sale date)

### Submission Guidelines

- **The pull request should have a clean git history.**
- Don't use another company's trademarks (icon, logo or name) without supplying evidence of prior permission
- Create a directory under `/validators/` and include the _manifest.json_ and the _logo.png_
- Keep description short and simple, but descriptive.
- Check your spelling and grammar.
- URL must have schemes of **_http_** or **_https_**.
- Logo complies with the logo rules

> If the maintainers/reviewer notice anything that we'd like changed, we'll ask you to edit your PR before we merge it.

## Approval and publication

Once your details are approved, they will appear on Stargate in the validators list, as well as in your validator panel page.